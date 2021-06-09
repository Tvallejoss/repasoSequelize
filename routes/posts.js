const express = require('express')
const router = express.Router()
const { Post, User } = require('../models/Post')


router.get('/', (req, res, next) => {
    res.send('estoy en ruta posteos')
})

module.exports = router