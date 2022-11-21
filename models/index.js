const User = require('./user');
const Blog = require('./blog');
const User = require('./user');

User.hasMany(Blog,{
    foreignKey: 'username',
});

Blog belongsTo(User, {
    foreignKey: 'id'
})
module.exports = { User, Blog }