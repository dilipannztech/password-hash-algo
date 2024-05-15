import bcrypt from "bcrypt";

// Constant for salt rounds
const SALT_ROUNDS = 10;

// Function to hash the password
export function hashPassword(password: string): string {
  try {
    const salt = bcrypt.genSaltSync(SALT_ROUNDS);
    const hashedPassword: string = bcrypt.hashSync(password, salt);
    return hashedPassword;
  } catch (error) {
    throw new Error(`Error hashing password: ${error}`);
  }
}

// Function to check if the password matches the hashed password
export function checkPassword(
  password: string,
  hashedPassword: string
): boolean {
  try {
    const isMatch: boolean = bcrypt.compareSync(password, hashedPassword);
    return isMatch;
  } catch (error) {
    throw new Error(`Error checking password: ${error}`);
  }
}
