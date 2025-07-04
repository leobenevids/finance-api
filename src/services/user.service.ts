import * as userRepository from "../repositories/user.repository";

export async function registerUser(email: string, password: string) {
  const existingUser = await userRepository.findUserByEmail(email);
  if (existingUser) {
    throw new Error("Usuário já existe");
  }
  return userRepository.createUser({ email, password });
}
