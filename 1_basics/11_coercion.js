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
console.log('-----------')

// 명시적 변환 몇 가지 더 배우기
// String으로 변환 -> toString()
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'));
console.log(typeof +'1', +'1');
console.log('-----------')

/**
 * Boolean 타입으로 변환 - 실무에서 자주 쓰임
 * 
 * String에 값이 있으면 무조건 true로 판단
 * 숫자 -> 0은 false
 * undifined, null -> false
 * Object, Array -> 값의 유무와 상관 없이 항상 true

 */


console.log(!!'x');
console.log(!!'');

console.log(!!0);
console.log(!!'0');

console.log(!!'false');
console.log(!!false);

console.log(!!undefined);
console.log(!!null);

console.log(!!{});
console.log(!![]);