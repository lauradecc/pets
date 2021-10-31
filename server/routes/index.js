const router = require("express").Router()

router.use("/auth", require('./auth.routes'))
router.use("/users", require('./users.routes'))

module.exports = router;
