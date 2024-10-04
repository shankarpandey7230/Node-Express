import express from 'express';
const app = express();

import { products } from './data.js';

app.get('/', (req, res) => {
  res.json(products);
});

app.listen(8000, () => {
  console.log('Server is listening on port 8000....');
});
