"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPassword = exports.hashPassword = void 0;
const crypto_1 = require("crypto");
// Static salt value
const SALT = 10;
// Function to hash the password
function hashPassword(password) {
    const hash = (0, crypto_1.createHash)("sha256");
    hash.update(password + SALT);
    return hash.digest("hex");
}
exports.hashPassword = hashPassword;
// Function to check if the password matches the hashed password
function checkPassword(password, hashedPassword) {
    const hash = hashPassword(password);
    return hash === hashedPassword;
}
exports.checkPassword = checkPassword;
