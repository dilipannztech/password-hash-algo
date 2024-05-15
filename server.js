const { hashPassword, checkPassword } = require("./dist/bcryptFunctions");

const passwors = hashPassword("dilip");
const verifyPassword = checkPassword("dilip", passwors);

console.log(passwors);
