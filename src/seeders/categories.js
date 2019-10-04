import models from '../models';

const createSeededCategories = async () => {
  await models.Category.deleteMany({});
  const category1 = new models.Category({
    name: 'computers',
  });
  const category2 = new models.Category({
    name: 'phones',
  });
  await category1.save();
  await category2.save();
};

export default createSeededCategories;
