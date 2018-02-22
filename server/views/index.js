module.exports = (router, routes) => {
    routes.forEach(route => {
        router.use("/" + route, require("./" + route))
    })
}