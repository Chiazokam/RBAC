import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDb } from './src/models';
import createSeededUsers from './src/seeders/users';
import createSeededProducts from './src/seeders/products';
import createSeededCategories from './src/seeders/categories';
import createSeededMessages from './src/seeders/messages';
import routes from './src/routes';

dotenv.config();

const { PORT } = process.env;
const app = express();
const port = PORT || 3000;

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: 'application/json' }));


app.use('/api/v1', routes);

app.get('*', (req, res) => {
  res.send('Hello Mart');
});

connectDb().then(async () => {
  createSeededUsers();
  createSeededProducts();
  createSeededCategories();
  createSeededMessages();

  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Listening on port ${port}`);
  });
});

export default app;
