const User = require('./user');
const Blog = require('./blog');

// User.hasMany(Blog, { foreignKey: 'name_id'})

Blog.belongsTo(User, {
    foreignKey: 'name_id',
  });
  
module.exports = { User, Blog }