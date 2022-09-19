// const sequelize = new (require('sequelize').Sequelize)();
// const DataTypes = require('sequelize').DataTypes;

module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    { underscore: true }
  );
  return Comment;
};
