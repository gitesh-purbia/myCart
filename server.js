const serverFactory = require('spa-server');

const server = serverFactory.create({
  path: './dist',
  port: 80,
  fallback: 'index.html'
});

server.start();
