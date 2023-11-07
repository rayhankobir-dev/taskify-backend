const { Router } = require("express");
const {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/task");
const authentication = require("../middleware/authentication");

const router = new Router();

router.get("/", getTasks);
router.post("/", authentication, createTask);
router.put("/", authentication, updateTask);
router.delete(
  "/",
  (req, res, next) => {
    console.log(req.body);
    next();
  },
  deleteTask
);

module.exports = { tasks: router };
