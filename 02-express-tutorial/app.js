import express from 'express';
import { products } from './data.js';

const app = express();

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>');
});

app.get('/api/products', (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, image, name };
  });
  res.json(newProducts);
});
app.get('/api/products/:productID', (req, res) => {
  // console.log(req);
  console.log(req.params);
  const { productID } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist');
  }

  return res.json(singleProduct);
});
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params);
  res.send('hello world');
});

app.listen(8000, () => {
  console.log('Server is listening on port 8000 ....');
});
