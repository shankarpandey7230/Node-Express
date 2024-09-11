import http from 'http';

const server = http.createServer((req, res) => {
  console.log('request event');
  res.end('hello world');
});

server.listen(8080, () => {
  console.log('Server listening on port: 8080 ...');
});
