const serverFactory = require('spa-server');

const server = serverFactory.create({
  path: './dist',
  port: 3000,
  fallback: 'index.html'
});

server.start();
