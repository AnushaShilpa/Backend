const path= require('path')
const rootDir = require('../util/path');

exports.admincontroller =(req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'admin.html'));
}

exports.admincontrol=(req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'product.html'));
}

