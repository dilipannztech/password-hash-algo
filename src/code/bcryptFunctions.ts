import bcrypt from "bcrypt";

// Function to hash the password
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10; // Number of salt rounds
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

// Function to check if the password matches the hashed password
export async function checkPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
}
