import Category from '../models/category';

/**
 * @description Create Category controller
 * @param {object} req
 * @param {object} res
 * @returns {object} res
 */
const createCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const category = new Category({ name });
    await category.save();
    return res.status(201).json({
      status: 201,
      data: category,
      message: 'Successfully created a category',
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

/**
 * @description Get Categories controller
 * @param {object} req
 * @param {object} res
 * @returns {object} res
 */
const getCategories = async (req, res) => {
  const categories = await Category.find({});
  if (categories.length === 0) {
    return res.status(404).json({
      status: 404,
      message: 'No categories found',
    });
  }
  return res.status(200).json({
    status: 200,
    message: 'Successfully retrieved all categories',
    data: categories,
  });
};

/**
 * @description Update Category
 * @param {object} req
 * @param {object} res
 * @returns {object} res
 */
const updateCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const { id: _id } = req.params;
    const category = await Category.findOneAndUpdate(
      { _id },
      { name },
      { new: true },
    );
    if (!category) {
      return res.status(404).json({
        status: 404,
        message: 'Category Not Found',
      });
    }
    return res.status(201).json({
      status: 201,
      data: category,
      message: 'Category has been updated',
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

/**
 * @description Delete Category
 * @param {object} req
 * @param {object} res
 * @returns {object} res
 */
const deleteCategory = async (req, res) => {
  try {
    const { id: _id } = req.params;
    const category = await Category.findOneAndDelete({ _id });
    if (!category) {
      return res.status(404).json({
        status: 404,
        message: 'Category Not Found',
      });
    }
    return res.status(200).json({
      data: category,
      message: 'Category has been deleted',
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};

export {
  createCategory, getCategories, updateCategory, deleteCategory,
};
