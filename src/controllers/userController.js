const fs = require('fs');
const cloudinary = require('../utils/cloudinary');
const { User } = require('../models');

exports.updateUser = async (req, res, next) => {
  try {
    const { password, ...updateValue } = req.body;

    if (req.files.profileImage) {
      const profileImage = req.user.profileImage;

      const secureUrl = await cloudinary.upload(
        req.files.profileImage[0].path,
        profileImage ? cloudinary.getPublicId(profileImage) : undefined
      );

      updateValue.profileImage = secureUrl;
      fs.unlinkSync(req.files.profileImage[0].path);
    }
    if (req.files.coverImage) {
      const coverImage = req.user.coverImage;

      const secure_url = await cloudinary.upload(
        req.files.coverImage[0].path,
        coverImage ? cloudinary.getPublicId(coverImage) : undefined
      );
      updateValue.coverImage = secure_url;
      fs.unlinkSync(req.files.coverImage[0].path);
    }

    await User.update(updateValue, { where: { id: req.user.id } });

    const user = await User.findOne({
      where: { id: req.user.id },
      attributes: { exclude: 'password' },
    });

    res.status(200).json({ user });
  } catch (err) {
    next(err);
  }
};
