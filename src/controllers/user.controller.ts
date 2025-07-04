import { Request, Response } from "express";
import * as userService from "../services/user.service";

export async function registerUserController(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const user = await userService.registerUser(email, password);
    res.status(201).json(user);
  } catch (error: any) {
    res.status(400).json({ error: error.message || "Erro ao criar usuário" });
  }
}
