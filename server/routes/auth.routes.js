const router = require("express").Router()

const { isLoggedIn } = require('../middleware')
const User = require('./../models/User.model')
const bcrypt = require("bcrypt")
const bcryptSalt = 10
const { isBlank } = require("./../utils")


router.post('/signup', (req, res) => {

  const { name, email, pwd } = req.body

  if (isBlank(name) || isBlank(email) || isBlank(pwd)) {
    res.status(400).json({ code: 400, message: 'Please fill in all the fields' })
    return
  }

  User
    .find({ email })
    .then(users => {

      if (users?.length === 1) {
        res.status(400).json({ code: 400, message: 'Email already registered' })
        return
      }

      const salt = bcrypt.genSaltSync(bcryptSalt)
      const hashPass = bcrypt.hashSync(pwd, salt)

      User
        .create({ name, email, password: hashPass })
        .then(user => {
          req.session.currentUser = user
          res.json({ code: 200, message: 'User created', user })
        })
        .catch(err => res.status(500).json({ code: 500, message: 'DB error while creating user', err: err.message }))
    })
    .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err: err.message }))
})


router.post('/login', (req, res) => {

  const { email, pwd } = req.body

  if (isBlank(email) || isBlank(pwd)) {
    res.status(400).json({ code: 400, message: 'Please fill in all the fields' })
    return
  }

  User
    .findOne({ email })
    .then(user => {

      if (!user) {
        res.status(401).json({ code: 401, message: 'Email not registered' })
        return
      }

      if (bcrypt.compareSync(pwd, user.password) === false) {
        res.status(401).json({ code: 401, message: 'Incorrect password' })
        return
      }

      req.session.currentUser = user
      res.json(req.session.currentUser)
    })
    .catch(err => res.status(500).json({ code: 500, message: 'DB error while fetching user', err: err.message }))
})


router.get('/logout', isLoggedIn, (req, res) => {
  req.session.destroy((err) => res.json({ message: 'Logout successful' }))
})


router.post("/refresh-session", isLoggedIn, (req, res) => {

  const id = req.session.currentUser._id

  User
    .findById(id)
    .then(user => {
      req.session.currentUser = user
      res.json(req.session.currentUser)
    })
    .catch(err => res.status(500).json({ code: 500, message: 'Error refreshing session' }))
})


router.post("/is-logged-in", (req, res) => {
  req.session.currentUser ? res.json(req.session.currentUser) : res.status(401).json({ code: 401, message: 'Unauthorized' })
})


module.exports = router
