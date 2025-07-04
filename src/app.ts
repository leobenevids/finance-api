import express from "express";
import userRoutes from "./routes/user.routes";
import authRoutes from "./routes/auth.routes";
import protectedRoutes from "./routes/protected.routes";
import expenseRoutes from "./routes/expense.routes";

const app = express();

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/protected", protectedRoutes);
app.use("/expenses", expenseRoutes);

export default app;
