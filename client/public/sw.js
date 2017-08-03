/* eslint-disable */
importScripts('/sw-toolbox.js');

toolbox.router.get('/(.*)', toolbox.cacheFirst, {
  cache: {
    name: 'pages',
  }
});
