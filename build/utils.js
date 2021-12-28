const path = require('path');

module.exports = {
  resolve: function (dir) {
    return path.join(__dirname, '..', dir);
  },
  assetsPath: function (_path) {
    const assetsSubDirectory = 'assets';
    return path.posix.join(assetsSubDirectory, _path);
  },
  processDevMode: function () {
    return process.env.NODE_ENV === 'development';
  }
}