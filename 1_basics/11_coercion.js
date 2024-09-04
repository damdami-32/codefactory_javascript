/**
 * 타입 변환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 */

let age = 32;

// 명시적 변환
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

// 암묵적 변환
let test = age + '';
console.log(typeof test, test);

console.log('98' + 2);      // 982
console.log('98' * 2);      // 196
console.log('98' - 2);      // 96