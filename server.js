const serverFactory = require('spa-server');

const server = serverFactory.create({
  path: './dist',
  port: process.env.PORT || 3000,
  fallback: 'index.html'
});

server.start();
