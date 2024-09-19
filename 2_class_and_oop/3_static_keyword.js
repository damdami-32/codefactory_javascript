/**
 * Static Keyword
 * Property를 클래스를 귀속되게 할 수 있음
 */

// class IdolModel {
//     name;
//     year;
//     static groupName = '아이브';

//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }

//     static returnGropuName() {
//         return '아이브';
//     }
// }

// const yuJin = new IdolModel('안유진', 2003);
// console.log(yuJin);

// console.log(IdolModel.groupName);
// console.log(IdolModel.returnGropuName());

/**
 * factory constructor
 * 
 * 하나의 생성자가 아닌 어떤 데이터 형태로 입력 받아서 이 인스턴스를 만들지 정의해둘 수 있음.
 */

class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static fromObject(object){
        return new IdolModel(
            object.name, 
            object.year
        );
    }

    static fromList(list){
        return new IdolModel(
            list[0],
            list[1]
        );
    }
}

const yuJin2 = IdolModel.fromObject({
    name: '안유진', 
    year : 2003
});
console.log(yuJin2);

const wonYoung = IdolModel.fromList(
    [
        '장원영',
        2004,
    ]
);

console.log(wonYoung);