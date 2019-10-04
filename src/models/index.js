import mongoose from 'mongoose';
import User from './user';
import Product from './product';
import Message from './message';
import Category from './category';

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
};
const connectDb = () => mongoose.connect(process.env.DATABASE_URL, options);
const models = {
  User, Product, Message, Category,
};

export { connectDb };
export default models;
