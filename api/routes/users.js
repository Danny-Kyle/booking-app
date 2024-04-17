import express from "express"
import { createUser, deleteUser, getAllUsers, getSingleUser, updateUser } from "../controllers/userController.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (res, req, next) => {
    res.send("Hello User, Log IN Successful!")
})

router.get("/checkuser/:id", verifyUser, (res, req, next) => {
    res.send("Hello User, Log IN Successful and termination of your account is possible!")
})

router.get("/checkadmin/:id", verifyAdmin, (res, req, next) => {
    res.send("Hello Admin, Log IN Successful and termination of all accounts is possible!")
})

router.post("/", createUser);
router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/", verifyUser, getAllUsers);
router.get("/:id", verifyUser, getSingleUser);

export default router;