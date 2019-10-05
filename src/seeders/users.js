import models from '../models';

const createSeededUsers = async () => {
  await models.User.deleteMany({});
  const user1 = new models.User({
    email: 'admin@admin.com',
    password: '$2b$10$tdAaS/kveXS1LzoHrd2AgencZC4MQMKrKiSDbgN81mDtesB0muDo6',
    role: 'supervisor',
    employmentDate: '2019-09-05T16:00:00Z',
  });

  const user2 = new models.User({
    email: 'john@mock.com',
    password: '$2b$10$tdAaS/kveXS1LzoHrd2AgencZC4MQMKrKiSDbgN81mDtesB0muDo6',
    role: 'employee',
    employmentDate: '2019-09-29T16:00:00Z',
  });
  const user3 = new models.User({
    email: 'jane@mock.com',
    password: '$2b$10$tdAaS/kveXS1LzoHrd2AgencZC4MQMKrKiSDbgN81mDtesB0muDo6',
  });
  await user1.save();
  await user2.save();
  await user3.save();
};

export default createSeededUsers;
