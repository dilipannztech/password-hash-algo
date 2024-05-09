import { createHash } from "crypto";

// Static salt value
const SALT = 10;

// Function to hash the password
export async function hashPassword(password: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const hash = createHash("sha256");
    hash.update(password + SALT);
    resolve(hash.digest("hex"));
  });
}

// Function to check if the password matches the hashed password
export async function checkPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  const hash = await hashPassword(password);
  return hash === hashedPassword;
}
