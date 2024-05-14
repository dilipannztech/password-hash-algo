import { createHash } from "crypto";

// Static salt value
const SALT = 10;

// Function to hash the password
export function hashPassword(password: string): string {
  const hash = createHash("sha256");
  hash.update(password + SALT);
  return hash.digest("hex");
}

// Function to check if the password matches the hashed password
export function checkPassword(
  password: string,
  hashedPassword: string
): boolean {
  const hash = hashPassword(password);
  return hash === hashedPassword;
}
