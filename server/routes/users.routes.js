const router = require("express").Router()
const users = require('../users.json')


router.get('/', (req, res) => {
  return res.status(200).json(users[0]) // First user forced
})


module.exports = router
