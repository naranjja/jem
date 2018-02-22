const router = require("express").Router()
const path = require("path")

const root = path.resolve(__dirname, "..", "..")
const components = path.join(root, "client", "src", "components")

if (process.env.NODE_ENV === "production") {
    const { ensureLoggedIn } = require("connect-ensure-login")
    router.get("/", ensureLoggedIn(), (req, res) => {
        res.render(path.join(components, "Home", "Home"))
    })
} else {
    router.get("/", (req, res) => {
        res.render(path.join(components, "Home", "Home"))
    })
}

module.exports = router