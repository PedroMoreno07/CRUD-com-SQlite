import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const SALT_ROUND = 10;
const JWT_SECRET = process.env.JWT_SECRET;
export async function hashPassword(password) {
  return await bcrypt.hash(password, SALT_ROUND);
}

export function generateToken(user) {
  return jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    JWT_SECRET,
    { expiresIn: "1h" }
  );
}
