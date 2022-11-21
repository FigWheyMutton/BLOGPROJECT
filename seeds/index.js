const sequelize = require('../config/connection');
const { User } = require('../models');
const blogPost =require('./blogPost.json');
const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await blogPost(blogPost, {
    individualHooks: true,
    plain: true,
  });
  
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
    plain: true,
  });

  process.exit(0);
};

seedDatabase();
