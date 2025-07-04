import * as userRepository from "../repositories/user.repository";
import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export async function registerUser(email: string, password: string) {
  const existingUser = await userRepository.findUserByEmail(email);
  if (existingUser) {
    throw new Error("Usuário já existe");
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  return userRepository.createUser({ email, password: hashedPassword });
}
