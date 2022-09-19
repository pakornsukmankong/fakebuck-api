//const sequelize = new (require('sequelize').Sequelize)()
//const DataTypes = require('sequelize').DataTypes

module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    'Post',
    {
      title: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    { underscore: true }
  );
  return Post;
};
