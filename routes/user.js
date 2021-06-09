const express = require('express')
const router = express.Router()
const { User } = require('../models/User')


router.get('/', (req, res, next) => {
    User.findAll()
    .then(users => {
        res.send('estoy en ruta users')
    })
.catch(next)
})


router.get('/:userId', (req, res, next) => {
  User.findByPk(req.params.userId)
  .then(userFound => {

  })
  .catch(next)
})
module.exports = router