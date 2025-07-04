import { Router } from "express";
import { authMiddleware } from "middlewares/auth.middleware";
import {
  createExpenseController,
  listExpensesController,
} from "../controllers/expense.controller";

const router = Router();

router.use(authMiddleware);

router.post("/", createExpenseController);
router.get("/", listExpensesController);

export default router;
