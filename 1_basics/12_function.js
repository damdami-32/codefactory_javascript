/**
 * function -> 함수
 * 
 * 2라는 숫자에 * 10 / 2 % 3을 스트링으로 변환해 반환받고 싶다면?
 */

console.log((2 * 10 / 2 % 3).toString());
console.log((3 * 10 / 2 % 3).toString());

/**
 * DRY
 * D -> Don't
 * R -> Repeat
 * Y -> Yourself
 */

function calculate() {
    console.log((2 * 10 / 2 % 3).toString());
}

//calculate();

// 똑같은 함수명을 다시 선언하면 덮어쓰기가 된다.

function calculate(number) {
    console.log((number * 10 / 2 % 3).toString());
}

/**
 * Parameter : 함수에서 입력받는 값에 대한 정의
 * Argument : 실제 입력하는 값
 */

calculate(4);
calculate(5);

function multiply(x, y) {
    console.log(x * y);
}

multiply(2, 4);

function multiply(x, y = 10) {
    console.log(x * y);
}

multiply(2, 4);
multiply(2);
console.log('-----------')

// 반환(return) 받기

function multiply(x, y) {
    return x * y;
}

const result1 = multiply(2, 4);
console.log(result1);

const result2 = multiply(4, 5);
console.log(result2);

// Arrow 함수
const multiply2 = (x, y)=> {
    return x * y;
}

console.log(multiply2(3,4));

const multiply3 = (x, y) => x * y;
console.log(multiply3(4,5));

const multiply4 = x => x * 2;
console.log(multiply4(2));

const multiply5 = x => y => z => `x: ${x} y: ${y} z:${z}`;
console.log(multiply5(2)(5)(7));

function multiply6(x) {
    return function(y) {
        return function(z) {
            return `x: ${x} y: ${y} z:${z}`;
        }
    }
}
console.log(multiply6(3)(4)(5));

// 함수를 변수처럼 선언할 수도 있다.
const multiplyTwo = function(x, y) {
    return x * y;
}
console.log(multiplyTwo(4,5));

const multiplyThree = function(x, y, z) {
    console.log(arguments);
    return x * y * z;
}
console.log('-----------')
console.log(multiplyThree(4, 5, 6));

const multiplyAll = function(...arguments){
    return Object.values(arguments).reduce((a, b) => a * b, 1);
}

console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

// immediately invoked function
(function(x, y) {
    console.log(x * y);
})(4, 5)

console.log(typeof multiply);
console.log(multiply instanceof Object);    //좌측이 오른쪽 타입인지 확인