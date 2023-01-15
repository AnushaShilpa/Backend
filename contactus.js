
const path= require('path')
const rootDir = require('../util/path');


exports.contactcontroller=(req, res, next) => 
{
  res.sendFile(path.join(rootDir,'views','contact.html'));
}


exports.sucesscontroller=(req, res, next) => {
  res.status(404).sendFile(path.join(rootDir,'views','sucess.html'));
}