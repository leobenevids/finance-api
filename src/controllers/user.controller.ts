// user.controller.ts
import { Request, Response } from "express";
import * as userService from "../services/user.service";
import { createUserSchema } from "../schemas/user.schema";
import { ZodError } from "zod";

export async function registerUserController(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const validatedData = createUserSchema.parse(req.body);
    const user = await userService.registerUser(
      validatedData.email,
      validatedData.password
    );
    return res.status(201).json(user);
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      const formatted = error.errors.map((err) => err.message);
      return res.status(400).json({ errors: formatted });
    }

    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(400).json({ error: "Erro ao criar usuário" });
  }
}
