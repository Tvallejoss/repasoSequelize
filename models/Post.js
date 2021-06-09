const S = require('sequelize')
const db = require('../db/db')


class Post extends S.Model {}

Post.init({
    title: {
        type: S.STRING,
        allowNull: false
    }, 
    content: {
        type: S.TEXT
    }
}, {sequelize: db, modelName: "post"})

module.exports = Post