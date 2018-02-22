require("dotenv").config()

const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const session = require("express-session")

const app = express()
const root = path.resolve(__dirname, "..")
const client = path.join(root, "client")
const port = process.env.PORT || 5000

app.set("trust proxy", true)
app.set("view engine", "pug")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser("well-kept"))
app.use(
    session ({
        secret: "well-kept",
        name: "agnostic",
        resave: true,
        saveUninitialized: true
    })
)

app.use("/public", express.static(path.join(client, "public")))

require("./views")(app, [
    "login",
    "home"
])

app.listen(port, () => {
    console.log(`App listening on port ${port}!`)
})