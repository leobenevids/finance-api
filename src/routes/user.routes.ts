import { registerUserController } from "controllers/user.controller";
import { Router } from "express";

const router = Router();

router.post("/", registerUserController);

export default router;
