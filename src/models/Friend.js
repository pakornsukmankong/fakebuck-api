// const sequelize = new (require('sequelize').Sequelize)();
// const DataTypes = require('sequelize').DataTypes;

const { FRIEND_ACCEPTED, FRIEND_PENDING } = require('../config/constants');

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

  Friend.associate = (db) => {
    Friend.belongsTo(db.User, {
      as: 'Requester', // define name for include eg. User.findAll({include: 'Requester'})
      foreignKey: {
        name: 'requesterId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });

    Friend.belongsTo(db.User, {
      as: 'Accepter', // define name for include eg. User.findAll({include: 'Requester'})
      foreignKey: {
        name: 'accepterId',
        allowNull: false,
      },
      onDelete: 'RESTRICT',
      onUpdate: 'RESTRICT',
    });
  };

  return Friend;
};