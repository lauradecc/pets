require("dotenv/config")

require("./db")

const express = require("express")

const app = express()

require("./config")(app)

const allRoutes = require("./routes")
app.use("/api", allRoutes)

require("./error-handling")(app)

app.use((req, res) => res.sendFile(__dirname + "/public/index.html"))

module.exports = app
