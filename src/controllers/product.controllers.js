import Product from '../models/product';

/**
 * @description Get Products controller
 * @param {object} req
 * @param {object} res
 * @returns {object} res
 */
const getProducts = async (req, res) => {
  const products = await Product.find({});
  if (products.length === 0) {
    return res.status(404).json({
      status: 404,
      message: 'No products found',
    });
  }
  return res.status(200).json({
    status: 200,
    message: 'Successfully retrieved all products',
    data: products,
  });
};

/**
 * @description Update Product
 * @param {object} req
 * @param {object} res
 * @returns {object} res
 */
const updateProduct = async (req, res) => {
  try {
    const { name, category } = req.body;
    const { id: _id } = req.params;
    const product = await Product.findOneAndUpdate(
      { _id },
      { name, category },
      { new: true },
    );
    if (!product) {
      return res.status(404).json({
        status: 404,
        message: 'Product Not Found',
      });
    }
    return res.status(201).json({
      status: 201,
      data: product,
      message: 'Product has been updated',
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

/**
 * @description Delete Product
 * @param {object} req
 * @param {object} res
 * @returns {object} res
 */
const deleteProduct = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const product = await Product.findOneAndDelete({ _id });
    if (!product) {
      return res.status(404).json({
        status: 404,
        message: 'Product Not Found',
      });
    }
    return res.status(200).json({
      data: product,
      message: 'Product has been deleted',
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

export {
  getProducts, updateProduct, deleteProduct,
};
