"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFizzBuzz = void 0;
const generateFizzBuzz = (count) => {
    let fizzBuzz = [];
    for (let numberRange = 1; numberRange <= count; numberRange++) {
        if (numberRange % 3 === 0 && numberRange % 5 === 0) {
            console.log('fizzBuzz');
            fizzBuzz.push('fizzBuzz');
        }
        else if (numberRange % 3 === 0) {
            console.log('fizz');
            fizzBuzz.push('fizz');
        }
        else if (numberRange % 5 === 0) {
            console.log('buzz');
            fizzBuzz.push('buzz');
        }
        else {
            console.log(numberRange);
        }
    }
    return fizzBuzz;
};
exports.generateFizzBuzz = generateFizzBuzz;
