const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  newTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/controllerTasks");

router.get("/getAllTasks", getAllTasks);
router.post("/newTask", newTask);
router.get("/getTask/:id", getTask);
router.delete("/deleteTask/:id", deleteTask);
router.patch("/updateTask/:id", updateTask);

// router.route("/").get(getAllTasks).post(newTask);
// router.route("/:id").get(getTask).delete(deleteTask).patch(updateTask);

module.exports = router;
