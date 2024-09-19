/**
 * Object / 객체
 */

// key : value pair
// this : 함수가 정의되어있는 해당 객체
let yuJin = {
    name: '안유진',
    group: '아이브',
    dance : function() {
        return  `${this.name}이 춤을 춥니다.`;
    }
};

console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']);

const key = 'name';

console.log(yuJin[key]);

console.log(yuJin.dance());

const nameKey = 'name';
const nameValue = '안유진';

const groupKey = 'group';
const groupValue = '아이브';

// 변수로 key 이름을 사용하려면 대괄호 사용
const yuJin2 = {
    [nameKey]: nameValue,
    [groupKey] : groupValue,
    dance: function() {
        return `${this.name}이 춤을 춥니다.`;
    }
};

console.log(yuJin2);
console.log(yuJin2.dance());

yuJin2['group'] = '코드팩토리';
console.log(yuJin2);

// 존재하지 않는 키를 넣으면 새로 생성됨
yuJin2['engilshName'] = 'An Yu Jin';
console.log(yuJin2);

delete yuJin2['engilshName'];
console.log(yuJin2);

/**
 * 객체의 특징
 * 
 * 1) const로 선언할 경우 객체 자체를 변경할 수는 없다.
 * 2) 객체 안의 프로퍼티나 메서드는 변경할 수 있다.
 */

const wonYoung = {
    name: '장원영',
    group: '아이브',
}

console.log(wonYoung);

// 에러 발생, const로 선언한 변수는 값 변경 불가
// wonYoung = {};

wonYoung['group'] = '코드팩토리';
console.log(wonYoung);

// 모든 키 값 다 가져오기
console.log('-----------------');
console.log(Object.keys(wonYoung));

// 모든 value 값 다 가져오기
console.log(Object.values(wonYoung));

// key와 value의 이름이 같으면 한 번만 써줘도 됨
const name ='안유진';

const yuJin3 = {
    name,
    // name : name, 과 같은 의미
};
console.log(yuJin3);