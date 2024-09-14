import http from 'http';

// const server = http.createServer((req, res) => {
//   res.end('Welcome');
// });

// Using Event Emitter API

const server = http.createServer();
// emits request event
// subscribe to it/ listen to it / respond it
server.on('request', (req, res) => {
  res.end('Welcome');
});

server.listen(8000);
