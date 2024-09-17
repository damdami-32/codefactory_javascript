/**
 * copy by value : 값에 의한 전달
 * copy by reference : 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다.
 * 2) 객체는 copy by reference다.
 */

let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안유진입니다.';
console.log('---------------');
console.log(original);
console.log(clone);

let originalObj = {
    name : '안유진',
    group : '아이브',
};

let cloneObj = originalObj;

console.log(originalObj);
console.log(cloneObj);

console.log('---------------');
originalObj['group'] = '코드팩토리';
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);

// object의 값이 다 같다고 해서 같은 객체 아님
originalObj = {
    name: '최지호',
    group: '코드팩토리',
};

cloneObj = {
    name: '최지호',
    group: '코드팩토리',
};

console.log(originalObj === cloneObj);

// object 선언시 object 값을 가지고 있는 공간 선언 후 그 공간을 가리킴.

const yuJin1 = {
    name: '안유진',
    group: '아이브',
};

const yuJin2 = yuJin1;
const yuJin3 = {
    name: '안유진',
    group: '아이브',
};

console.log(yuJin1 === yuJin2);     // true, 메모리 공간이 같음
console.log(yuJin1 === yuJin3);     // false, 다른 메모리 공간에 선언됨
console.log(yuJin2 === yuJin3);     // false

/**
 * Spread Operator
 */

// Object를 새로 선언했기 때문에 Copy By Value가 됨
const yuJin4 = {
    ...yuJin3,
};
console.log(yuJin4);

console.log(yuJin4 === yuJin3);

// Spread 이후 값 추가 가능, 순서 중요
const yuJin5 = {
    year: 2003,
    ...yuJin3,
};
console.log(yuJin5);

const yuJin6 = {
    name: '코드팩토리',
    ...yuJin3,
};
console.log(yuJin6);

const yuJin7 = {
    ...yuJin3,
    name: '코드팩토리',
};
console.log(yuJin7);

const numbers = [1, 3, 5];
const numbers2 = [
    ...numbers,
    10,
]
console.log(numbers2);