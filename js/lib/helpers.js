const fs = require("fs");

// Return random full Int
exports.randomInt = function(max) {
    min = Math.ceil(0);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - 0)) + 0;
}

// Generate random Alphanumeric string with specified length
exports.randomAlphaNumeric = function(length) {
    return Math.round((Math.pow(36, length + 1) - Math.random() * Math.pow(36, length))).toString(36).slice(1);
}

exports.rmDir = function(dirPath, removeSelf) {
    if (removeSelf === undefined)
      removeSelf = true;

    try { var files = fs.readdirSync(dirPath); }
    catch(e) {
        console.error(e);
        return; 
    }
    if (files.length > 0)
      for (var i = 0; i < files.length; i++) {
        var filePath = dirPath + '/' + files[i];
        if (fs.statSync(filePath).isFile())
          fs.unlinkSync(filePath);
        else
          rmDir(filePath);
      }
    if (removeSelf)
      fs.rmdirSync(dirPath);
  };