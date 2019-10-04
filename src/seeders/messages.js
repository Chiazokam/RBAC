import models from '../models';

const createSeededMessages = async () => {
  await models.Message.deleteMany({});
  const message1 = new models.Message({
    title: 'Monthly Promo',
    message: 'Get a reward for all your purchases! Buy one Lato Board Impress and get 1 free.',
  });
  await message1.save();
};

export default createSeededMessages;
