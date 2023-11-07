const { Router } = require("express");
const { tasks } = require("./task");
const { user } = require("./user");
const routes = new Router();

routes.use("/user", user);
routes.use("/tasks", tasks);

module.exports = routes;
