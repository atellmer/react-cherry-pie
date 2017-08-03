const path = require('path');


const resolve = {
  modules: [ 'node_modules' ],
  extensions: ['.js', '.jsx', '.json', '.css', '.html'],
  alias: {
    '@': path.resolve(__dirname, '../client/src')
  }
};

module.exports = resolve;
