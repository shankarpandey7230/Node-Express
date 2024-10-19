import express from 'express';

const app = express();

// req => middleware => res
const logger = (req, res, next) => {
  const method = req.method;
  const url = req.url;
  const time = new Date().getFullYear();
  console.log(method, url, time);
  //   res.send('Testing');
  next();
};

app.get('/', logger, (req, res) => {
  res.send('home');
});
app.get('/about', logger, (req, res) => {
  res.send('about');
});

app.listen(8000, () => {
  console.log('Example app listening on port 8000!');
});
