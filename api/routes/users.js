import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// Authentication check route
//router.get("/checkauthentication", verifyToken, (req, res, next) => {
// res.send("hello user, you are logged in");
//});

//router.get("/checkuser/:id", verifyUser, (req, res, next) => {
/// res.send("hello user, you are logged in and you can delete your account");
//});

//router.get("/checadmin/:id", verifyAdmin, (req, res, next) => {
//  res.send("hello admin, you are logged in and you can delete all accounts");
//});

// Update user route
router.put("/:id", verifyUser, updateUser);

// Delete user route
router.delete("/:id", verifyUser, deleteUser);

// Get user by ID route
router.get("/:id", verifyUser, getUser);

// Get all users route
router.get("/", verifyAdmin, getUsers);

export default router;
