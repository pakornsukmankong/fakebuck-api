// const sequelize = new (require('sequelize').Sequelize)();
// const DataTypes = require('sequelize').DataTypes;

module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {}, { underscore: true });
  return Like;
};
