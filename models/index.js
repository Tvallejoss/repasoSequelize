const User = require('./User')
const Post = require('./Post')


//RELACIONES

Post.belongsTo(User, {as: "author"})


//MANY TO MANY ---> TABLA INTERMEDIA

//Tabla pivot
/*

modelo1Id     modelo2Id
FK            FK

*/

//Modelo1.belongsToMany(Modelo2)
//Modelo1.hasMany(Modelo2)
//Modelo2.hasMany(Modelo1)

module.exports = {User, Post}