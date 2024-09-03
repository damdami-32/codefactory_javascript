/**
 * Hoisting
 */
console.log('Hello');
console.log('World');
console.log('---------');

// console.log(name);
// var name = '코드팩토리';
// console.log(name);

/**
 * Hoisting
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 */

// 위 주석처리한 코드가 밑에 코드로 실행되는 것처럼 보임.
// var name;
// console.log(name);
// name = '코드팩토리';
// console.log(name);

/** 
 * let과 const도 Hoisting 현상이 일어나긴 함
 * 
 * let, const -> 초기화 전에 변수에 접근할 수 없다는 오류 발생
 * var는 Hoistig 현상을 막아주지 못하는데 let과 const는 방지 가능
 */ 

console.log(yujin);
// let yujin = '안유진'; -> 이렇게 하면 yujin is not defind 발생