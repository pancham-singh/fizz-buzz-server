"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFizzBuzz = void 0;
const fizzBuzz_repo_1 = require("@repos/fizzBuzz-repo");
/**
 * Get all users.
 *
 * @returns
 */
function getFizzBuzz(count) {
    return (0, fizzBuzz_repo_1.generateFizzBuzz)(count);
}
exports.getFizzBuzz = getFizzBuzz;
