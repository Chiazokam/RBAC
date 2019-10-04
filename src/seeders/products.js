import models from '../models';

const createSeededProducts = async () => {
  await models.Product.deleteMany({});
  const product1 = new models.Product({
    name: 'Macbook Pro 2017',
    category: 'computers',
  });

  const product2 = new models.Product({
    name: 'Infinix S4',
    category: 'phones',
  });
  await product1.save();
  await product2.save();
};

export default createSeededProducts;
