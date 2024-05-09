const { hashPassword, checkPassword } = require("../../dist/bcryptFunctions");

// Example usage
async function bcryptFunctionsExample() {
  const password = "dilip";

  try {
    // Hash the password
    const hashedPassword = await hashPassword(password);
    console.log("Hashed Password:", hashedPassword);

    // Check if the password matches the hashed password
    const isMatch = await checkPassword(password, hashedPassword);
    console.log("Password matches hashed password:", isMatch);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

bcryptFunctionsExample();
