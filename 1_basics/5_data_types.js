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
 * Template Literal : 백틱 ``
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

const groupName = '아이브';
console.log(groupName + ' 안유진');
console.log(`${groupName} 안유진`);
console.log('-----------------');

// Boolean 타입
const isTrue = true;
const isFalse = false;
console.log(isTrue);
console.log(isFalse);

/** 
 * undifined
 * 사용자가 직접 값을 초기화하지 않았을 때 지정되는 값
 * 
 * 직접 Undifined로 값을 초기화하는건 지양해야함.
*/

let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * null 타입
 * 
 * undifined와 마찬가지로 값이 없다는 뜻
 * JS에서는 개발자가 "명시적으로" 없는 값으로 초기화할 때 사용
 */

let init = null;
console.log(init);
console.log(typeof init); // object 타입으로 인식됨
console.log('------------------')

/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할 때 사용
 * 다른 primitive 값들과 다르게 Symbol 함수를 호출해서 사용
 */

const test1 = '1';
const test2 = '2';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

// 같은 값을 넣어도 유일무이한 값으로 인식
console.log(symbol1 === symbol2)

/**
 * Object 타입
 * 
 * Map
 * key:value 쌍으로 이루어져있다.
 */

const dictionary = {
    red : '빨간색',
    orange : "주황색",
    yellow : '노란색'
};

console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);

console.log(typeof dictionary);

/** 
 * Array 타입
 * 
 * 값을 리스트로 나열할 수 있는 타입이다.
 */

const iveMembersArray = [
    '안유진',
    '장원영', 
    '가을',
    '레이',
    '이서',
    '리즈'
];

console.log(iveMembersArray);

/**
 * index
 * 
 * 0부터 1씩 증가한다.
 */

console.log(iveMembersArray[0]);
console.log(iveMembersArray[5]);

iveMembersArray[0] = '코드팩토리';
console.log(iveMembersArray);
console.log(typeof iveMembersArray);

/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할 지 명시 (ex : C)
 * 
 * dynamic typeing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 "추론"한다.  (ex : JS)
 */