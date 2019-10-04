import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

categorySchema.pre('remove', (next) => {
  this.model('Product').deleteMany({ category: this._id }, next);
});

const Category = mongoose.model('Category', categorySchema);
export default Category;
