// Operators (연산자)

/**
 * 산술 연산자
 *
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */

console.log(10 + 10);
console.log(10 - 10);
console.log(10 * 10);
console.log(10 / 10);
console.log(10 % 10);
console.log(10 % 3);
console.log("--------------");

console.log(10 * (10+10))

// 증가와 감소

let number = 1;

number++;
console.log(number);

number--;
console.log(number);
console.log("--------------");

// 연산자의 위치
let result = 1;
console.log(result);

result = number++; // number에 + 1 하기 전에 result에 먼저 값이 저장됨
console.log(result, number);    // 1, 2

result = number--; // number에 - 1 하기 전에 result에 먼저 값이 저장됨
console.log(result, number);    // 2, 1

// 앞에다 쓰는건 쓰지마!!!!!!
result = ++number; // 먼저 증가 후 result에 값이 저장됨
console.log(result, number);    // 2, 2

result = --number; // 먼저 감소 후 result에 값이 저장됨
console.log(result, number);    // 1, 1
console.log("--------------");

// 숫자가 아닌 타입에 +, - 사용

let sample = "99";

console.log(+sample);
console.log(typeof +sample); // number 타입으로 변환됨

console.log(sample);
console.log(typeof sample); // 원래 값이 변경되지는 않는다

sample = true;
console.log(+sample);   // true -> 1로 변환
console.log(typeof +sample); // number 타입으로 변환됨

sample = true;
console.log(+sample);   // false -> 0으로 변환
console.log(typeof +sample); // number 타입으로 변환됨

sample = '안유진';
// NaN -> Not a Number
console.log(+sample);

sample = '99';
console.log(-sample);   // -99
console.log("--------------");

// 할당 연산자

number = 100;
console.log(number);

number += 10;
console.log(number);

number -= 10;
console.log(number);

number *= 10;
console.log(number);

number /= 10;
console.log(number);

number %= 10;
console.log(number);
console.log("--------------");

/**
 * 비교 연산자 
 * 
 * 1) 값의 비교 -> 잘 안씀
 * 2) 값과 타입의 비교
 */

// 값만 비교
console.log(5 == 5);
console.log(5 == '5');
console.log(0 == '');
console.log(true == 1);
console.log(false == 0);
console.log(true == '1');

console.log(5 != '5');
console.log(5 != '5');
console.log(0 != '');
console.log(true != 1);
console.log(false != 0);
console.log(true != '1');
console.log("--------------");

// === : 타입까지 비교, 값이 같더라도 타입이 다르면 false
console.log(5 === 5); 
console.log(5 === '5');
console.log(0 === '');
console.log(true === 1);
console.log(false === 0);
console.log(true === '1');

console.log(5 !== '5');
console.log(5 !== '5');
console.log(0 !== '');
console.log(true !== 1);
console.log(false !== 0);
console.log(true !== '1');
console.log("--------------");

// 대소 관계 비교 연산자
console.log(100 > 1)
console.log(100 < 1)
console.log(100 <= 1)
console.log(100 >= 1)

// 삼항 조건 연산자 (ternary operator) 조건 ? true일 때 return : false일 때 return
console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');
console.log("--------------");

/**
 * 논리 연산자  
 * 
 * 1) && 조건이 모두 true여야 true 반환
 * 2) || 하나만 true여도 true 반환
 */
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);
console.log("--------------");

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);
console.log("--------------");

console.log(10 > 1 && 20 > 2);
console.log(10 < 1 && 20 > 2);
console.log(10 < 1 && 20 < 2);
console.log("--------------");

console.log(10 > 1 || 20 > 2);
console.log(10 < 1 || 20 > 2);
console.log(10 < 1 || 20 < 2);
console.log("--------------");

/**
 * 단축평가 (short circuit evaluation)
 * 실무에서 많이 사용
 * 
 * &&를 사용했을 때 좌측이 true면 우측 값 반환
 * &&를 사용했을 때 좌측이 false면 좌측 값 반환
 * ||를 사용했을 때 좌측이 true면 좌측 값 반환
 * ||를 사용했을 때 좌측이 false면 우측 값 반환
 */

console.log(true && '아이브');
console.log(false && '아이브');
console.log(true || '아이브');
console.log(false || '아이브');
console.log("--------------");

// 연결해서 사용할 수 있다는 장점
console.log(true && true && '아이브');
console.log(true && false && '아이브');
console.log("--------------");

// 지수 연산자
console.log(2 ** 2);
console.log(10 ** 3);

// null 연산자
let name;
console.log(name);

name = name ?? '코드팩토리';
console.log(name);

name = name ?? '아이브';
console.log(name);  // 코드팩토리 출력. 위에서 undifind라서 코드팩토리가 들어갔기 때문에 값이 있어서 들어가지 않음

let name2;
name2 ??= '코드팩토리';
console.log(name2);