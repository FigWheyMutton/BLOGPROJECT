const User = require('./user');
const Blog = require('./blog');

// User.hasMany(Blog, { foreignKey: 'name_id'})

// Blog.hasOne(User, { foreignKey: 'username'})

module.exports = { User, Blog }