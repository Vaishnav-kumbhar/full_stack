const express = require("express");
const {
  home,
  createUser,
  getUsers,
  deleteUsers,
  editUser,
} = require("../controllers/userController.js");
const router = express.Router();
router.get("/", home);
router.post("/createUser", createUser);
router.get("/getUsers", getUsers);
router.put("/edituser/:id", editUser);
router.delete("/deleteuser/:id", deleteUsers);
module.exports = router;
