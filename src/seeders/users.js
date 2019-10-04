import models from '../models';

const createSeededUsers = async () => {
  await models.User.deleteMany({});
  const user1 = new models.User({
    email: 'admin@mock.com',
    password: '$2b$10$Vf6M6OsL0WGcHvVESYUcpeYP1vIVSvOyQtdJov9p9oYxClOXeEZVy',
    role: 'supervisor',
    employmentDate: '2019-09-05T16:00:00Z',
  });

  const user2 = new models.User({
    email: 'john@mock.com',
    password: 'adminPassword123',
    role: 'employee',
    employmentDate: '2019-09-29T16:00:00Z',
  });
  await user1.save();
  await user2.save();
};

export default createSeededUsers;
