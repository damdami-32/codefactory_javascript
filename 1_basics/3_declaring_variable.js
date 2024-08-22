/**
 * Variable 선언하기
 * 
 * 1) var - 더 이상 쓰지 않는다.하지만 이해는 필요!!
 * 2) let
 * 3) const
 */

var name = '코드팩토리';
console.log(name);

var age = 32;
console.log(age);

let ive = '아이브';
console.log(ive);

/**
 *  let과 var로 선언하면
 *  값을 추후 변경할 수 있다.
 */

ive = '안유진';
console.log(ive);

const newJeans = '뉴진스';
console.log(newJeans);

// newJeans = "코드팩토리";

/**
 * const 변수는 추후 변경 불가
 */

/**
 * 선언과 할당
 * 
 * 1) 변수를 선언하는 것. 
 * 2) 할당 -> 값을 넣어주는 것
 */

var name = "코드팩토리";    // 선언과 할당을 한 줄에 함
console.log(name);

let girlFriend;     //선언만 해줌
console.log(girlFriend);    //값 정의 X, 초기 값으로 undefined 할당

//const girlFriend2;      // const는 반드시 값이 초기화된 상태로 선언