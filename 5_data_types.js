/**
 * Data Types
 * 
 * 6개의 Primitive Type => 다른 타입들이 구성이 될 수 있는 가장 작은 단위
 * 1개의 Object Type
 * 
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean 
 * 4) undifined
 * 5) null
 * 6) Symbol
 * 
 * 7) Object (객체)
 *      Function
 *      Array
 *      Object
 */

// Number Type
const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log('-------------------');

const infinity = Infinity;
const nInfinity = -Infinity;

console.log(typeof infinity);
console.log(typeof nInfinity);

console.log('-------------------');

// String Type
const codeFactory = '코드팩토리';
console.log(typeof codeFactory);

const ive = "'아이브' 안유진";
console.log(ive);

/** 
 * Template Literal
 * 
 * Escaping Character
 * 1) newline -> \n
 * 2) tab -> \t
 * 백슬래시를 스트링으로 표현하고 싶다면 두 번 입력
*/
const iveYuJin = '아이브\n안유진';
console.log(iveYuJin);
const iveWon = '아이브\t장원영';
console.log(iveWon);
const backSlash = '아이브\\코드팩토리';
console.log(backSlash);
const smallQutoation = '아이브\'코드팩토리';
console.log(smallQutoation);

const iveWon2 = `아이브 '" \\\ //
장원영`;
console.log(iveWon2);
console.log(typeof iveWon2);