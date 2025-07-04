import { Router } from "express";
import { registerUserController } from "../controllers/user.controller";

const router = Router();

router.post("/", registerUserController);

export default router;
