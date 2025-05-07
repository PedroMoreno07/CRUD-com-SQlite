import bcrypt from "bcrypt";

const SALT_ROUND = 10;
export async function hashPassword(password) {
  return await bcrypt.hash(password, SALT_ROUND);
}
