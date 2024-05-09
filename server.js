const { hashPassword, checkPassword } = require("./dist/cryptoFunctions");

async function hashPasswordL(password) {
  try {
    const hashedPassword = await hashPassword(password);

    return hashedPassword;
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

hashPasswordL("dilip")
  .then((hashePassword) => {
    console.log(hashePassword);
  })
  .catch((error) => {
    console.log(error);
  });
