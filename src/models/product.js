import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.String,
    ref: 'name',
  },
});

const Product = mongoose.model('Product', productSchema);
export default Product;
