import express from "express"
import { createUser, deleteUser, getAllUsers, getSingleUser, updateUser } from "../controllers/userController";
import { verifyToken, verifyUser } from "../utils/verifyToken";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (res, req, next) => {
    res.send("Hello User, Log IN Successful!")
})

router.get("/checkuser/:id", verifyUser, (res, req, next) => {
    res.send("Hello User, Log IN Successful and account termination is possible!")
})

router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.get("/", getAllUsers);
router.get("/:id", getSingleUser);

export default router;