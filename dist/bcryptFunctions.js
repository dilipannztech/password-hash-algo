"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPassword = exports.hashPassword = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
// Constant for salt rounds
const SALT_ROUNDS = 10;
// Function to hash the password
function hashPassword(password) {
    try {
        const salt = bcrypt_1.default.genSaltSync(SALT_ROUNDS);
        const hashedPassword = bcrypt_1.default.hashSync(password, salt);
        return hashedPassword;
    }
    catch (error) {
        throw new Error(`Error hashing password: ${error}`);
    }
}
exports.hashPassword = hashPassword;
// Function to check if the password matches the hashed password
function checkPassword(password, hashedPassword) {
    try {
        const isMatch = bcrypt_1.default.compareSync(password, hashedPassword);
        return isMatch;
    }
    catch (error) {
        throw new Error(`Error checking password: ${error}`);
    }
}
exports.checkPassword = checkPassword;
