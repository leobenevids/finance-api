import { Router } from "express";
import { authMiddleware } from "middlewares/auth.middleware";
import {
  createExpenseController,
  listExpensesController,
  updateExpenseController,
  deleteExpenseController,
} from "../controllers/expense.controller";

const router = Router();

router.use(authMiddleware);

router.post("/", createExpenseController);
router.get("/", listExpensesController);
router.put("/:id", updateExpenseController);
router.delete("/:id", deleteExpenseController);

export default router;
