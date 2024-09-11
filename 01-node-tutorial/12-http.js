import http from 'http';

// console.log(http);

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hello Coders, Welcome');
    return;
  }
  if (req.url === '/about') {
    res.end('Here is about');
    return;
  }
  res.end(`<h1>Oops!</h1> <p>Page can be found</p> <a href='/'>back home</a>
 `);
});

server.listen(8000);
