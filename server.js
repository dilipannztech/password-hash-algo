const { hashPassword, checkPassword } = require("./dist/cryptoFunctions");

const passwors = hashPassword("dilip");
const verifyPassword = checkPassword("dilip", passwors);

console.log(passwors);
console.log(verifyPassword);
