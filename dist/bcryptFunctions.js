"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPassword = exports.hashPassword = void 0;
const crypto_1 = require("crypto");
// Static salt value
const SALT = 10;
// Function to hash the password
function hashPassword(password) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            const hash = (0, crypto_1.createHash)("sha256");
            hash.update(password + SALT);
            resolve(hash.digest("hex"));
        });
    });
}
exports.hashPassword = hashPassword;
// Function to check if the password matches the hashed password
function checkPassword(password, hashedPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        const hash = yield hashPassword(password);
        return hash === hashedPassword;
    });
}
exports.checkPassword = checkPassword;
