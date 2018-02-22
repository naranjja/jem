const router = require("express").Router()
const path = require("path")

const root = path.resolve(__dirname, "..", "..")
const components = path.join(root, "client", "src", "components")

router.get("/", (req, res) => {
    res.render(path.join(components, "Login", "Login"))
})

module.exports = router