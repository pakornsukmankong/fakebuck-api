// const sequelize = new (require('sequelize').Sequelize)();
// const DataTypes = require('sequelize').DataTypes;

const { FRIEND_ACCEPTED, FRIEND_PENDING } = require('../config/constants/');

// module.exports = () => {
module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define(
    'Friend',
    {
      status: {
        type: DataTypes.ENUM(FRIEND_ACCEPTED, FRIEND_PENDING),
        allowNull: false,
        defaultValue: FRIEND_PENDING,
      },
    },
    { underscore: true }
  );
  return Friend;
};
