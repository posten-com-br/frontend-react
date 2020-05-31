const routes = require("next-routes");

module.exports = routes()
  .add("/", "home")
  .add("/users", "users")
  .add("/users/:user", "detail")
  .add("/tmp", "tmp")
  .add("/login", "login");
