const express = require('express')
const router = express.Router()
const { User } = require('../models/')



//update, findAll, findOne, findByPk, findOrCreate, destroy, create
//findAll es lo mismo que SELECT * FROM

router.get('/', (req, res, next) => {
    User.findAll()  // -----> [] SIEMPRE, ENCUENTRE O NO
    .then(users => {
        if(!users.length) return res.status(404).send("No encontramos nada!")
        res.send('estoy en ruta users')
    })
.catch(next)
})


router.get('/:userId', (req, res, next) => {
  User.findByPk(req.params.userId) //Que devuelve? {} o []?
  .then(userFound => {
    //Hagan las validaciones que crean necesarias
  })
  .catch(next)
})


router.get("/anotherSearch/:name", (req, res, next)=>{
  //SELECT * FROM users WHERE ...
  User.findOne({where:{
    age: 18
    // Operadores S.Op en comparaciones mas complejas
  }})
})


router.get("/classMethod", (req, res, next)=>{
  //Aca el metodo de clase
  res.send("Usando un metodo de clase")
})


router.get("/instanceMethod", (req, res, next)=>{
  //Aca el metodo de instancia. Se ejecuta directamente en User?
  res.send(`Usando un metodo de instancia`)
})


router.post("/creating", (req, res, next)=>{
  //Metodo create
  res.send("Aqui viene el post")
})


router.put("/edit/:id", (req, res, next)=>{
  //Update
  res.send("Un metodo para actualizar", req.params.id)
})


router.delete("/deleteOne/:id", (req, res, next)=>{
  //DESTROY
  res.send("Y aca eliminamos", req.params.id)
})


module.exports = router