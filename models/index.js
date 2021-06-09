
const User = require('./User')
const Post = require('./Post')


//RELACIONES

Post.belongsTo(User, {as: "author"})


module.exports = {User, Post}