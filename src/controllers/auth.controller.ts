import { Request, Response } from "express";
import * as authService from "services/auth.service";

export async function loginController(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const token = await authService.login(email, password);
    res.json({ token });
  } catch (error: any) {
    res.status(401).json({ error: error.message || "Credenciais inválidas" });
  }
}
