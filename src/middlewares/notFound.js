const { response } = require('express');

module.exports = (req, res, next) => {
  res.status(400).json({ message: 'resource not found on this server' });
};
