/**
 * Loops
 * 
 * 1) for
 * 2) while
 */

for (let i = 0; i < 10; i++) {
    console.log(i);
}

console.log('-----------')

for (let i = 10; i > 0; i--) {
    console.log(i);
}

console.log('-----------')

for (let i = 0; i < 3; i++) {
    for (let j = 3; j > 0; j--) {
        console.log(i, j);
    }
}

let square = '';
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        square += '*';
    }
    square += '\n';
}

console.log(square)

console.log('-----------')

// for ... in

// object에서는 key  값을 받음
const yuJin = {
    name : '안유진',
    year : 2003,
    group : '아이브',
}

for (let key in yuJin) {
    console.log(key);
}
console.log('-----------')

// index 값을 가져옴
const iveArray = ['유진', '가을', '레이', '이서', '리즈', '원영']

for (let key in iveArray) {
    console.log(key);
    console.log(`${key}:${iveArray[key]}`);
}
console.log('-----------')

// for...of : value 값을 가져옴

for (let value of iveArray) {
    console.log(value);
}

// While : 조건을 먼저 판단한 후 조건에 true가 반환되면 body 실행

let number = 0;

while(number < 10) {
    number++;
}

console.log(number)

// do while -> 잘 안씀, body를 실행한 후 조건이 true인지 판단

number = 0;

do {
    number++;
} while(number < 10);

console.log(number);
console.log('-----------')
// break

for (let i = 0; i < 10; i++){
    if (i === 5) {
        break;
    }
    console.log(i);
}
console.log('-----------')

number = 0;

while(number < 10) {
    if (number === 5) {
        break;
    }

    number++;
    console.log(number);
}
console.log('-----------')

// continue -> 조건이 true면 현재 loop 스킵하고 다음 loop 진행

for (let i = 0; i < 10; i++){
    if (i === 5) {
        continue;
    }
    console.log(i);
}
console.log('-----------')
number = 0;

while(number < 10) {
    number++;

    if (number === 5) {
        continue;
    }

    console.log(number);
}