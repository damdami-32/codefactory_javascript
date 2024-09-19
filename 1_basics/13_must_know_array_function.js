// Array Functions

let iveMembers = [
    '유진',
    '가을',
    '레이',
    '원영',
    '리즈',
    '이서',
]

console.log(iveMembers);

// push() : 직접적으로 변경함, 반환 값으로 길이 반환
console.log(iveMembers.push('코트팩토리'));
console.log(iveMembers);
console.log('-----------');

// pop() : 마지막 값 반환하고 삭제함
console.log(iveMembers.pop());
console.log(iveMembers);
console.log('-----------');

// shift() : 첫 번째 값 반환하고 삭제함
console.log(iveMembers.shift());
console.log(iveMembers);
console.log('-----------');

// unshift() : 첫 번째 인덱스에 값 삽입, 길이 반환
console.log(iveMembers.unshift('유진'));
console.log(iveMembers);
console.log('-----------');

//splice(n, m) : n번째 파라미터부터 m개 삭제
console.log(iveMembers.splice(0, 3));
console.log(iveMembers);
console.log('-----------');

iveMembers = [
    '유진',
    '가을',
    '레이',
    '원영',
    '리즈',
    '이서',
]

/**
 * immutable programing : 한 번 선언한 변수는 변경하지 않는게 좋음
 * 그래서 위에서 배운 것보다는 밑에서 나오는걸(기존 데이터 변경 X) 더 많이 사용
 * 
 */

//concat()
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers);
console.log('-----------');

//slice(n, m) -> n부터 m-1까지 값 반환
console.log(iveMembers.slice(0, 3));
console.log(iveMembers);

// spread operator => 완전히 새로운 Array가 생성됨
let iveMembers2 = [
    ...iveMembers,
];
console.log(iveMembers2);

let iveMembers3 = [
    iveMembers,
];
console.log(iveMembers3);
console.log('-----------');

let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

console.log([
    ...iveMembers,
] === iveMembers);

// 실무에서 자주 사용
// join -> 배열의 모든 요소 연결해 하나의 String 반환. default : ,
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

// sort() -> 오름차순으로 원래 Array를 "변경"해 정렬함
iveMembers.sort();
console.log(iveMembers);

console.log(iveMembers.reverse());

let numbers = [
    1,
    9,
    7,
    5,
    3,
]

console.log(numbers);

// a, b를 비교했을 때
// 1) a를 b보다 나중에 정렬하려면 (뒤에 위치) 0보다 큰 숫자를 반환
// 2) a를 b보다 먼저 정렬하려면 (앞에 위치) 0보다 작은 숫자를 반환
// 3) 원래 순서 그대로 두려면 0을 반환

// 오름차순 정리
numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(numbers);

// 내림차순 정리
numbers.sort((a, b) => a > b ? -1 : 1);
console.log(numbers);

// map()
console.log('-----------');
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브 : ${x}`));

console.log(iveMembers.map((x) => {
    if(x === '유진') {
        return `아이브: ${x}`;
    } else {
        return x;
    }
}));

console.log(iveMembers);

// filter() -> true인 값만 return
numbers = [1, 8, 7, 6, 3]
console.log(numbers.filter((x) => x % 2 === 0));

// find() -> true인 첫번째 값만 return
console.log(numbers.find((x) => x % 2 === 0));

// findIndex() -> true인 첫번째 인덱스 return
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce(콜백함수 , 초기값)
console.log(numbers.reduce((p, n) => p + n, 0));