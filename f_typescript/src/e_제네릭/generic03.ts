export const tmp = '';

// ! 유니온 타입과 제네릭

// ? 유니온 타입을 제네릭 타입 변수에 활용
// : extends 키워드를 사용하여 확장

type StringOrNumber = string | number;
function unionGeneric<T extends StringOrNumber>(value: T) {
  // T타입 변수에 문자열 또는 숫자형 자료형을 사용

  if (typeof value === 'string') {
    return value.toLowerCase();
  }

  return value;


}

const result1 = unionGeneric('STrinG');
const reuslt2 = unionGeneric(1000);

console.log(result1, reuslt2); // string 1000

// 제네릭 유틸리티 타입
// - TS에 내장된 제네릭의 기존 타입을 변환하거나 조작하는데 사용

// ! 1) Partial(부분적인, 선택적인)
// : 모든 속성을 옵셔널로 만들어줌
// - Partial<T>

interface User {
  name: string;
  age: number;
}

type ObjectSigniture = {
  [key: number]: User; // 인덱스 시그니처
}

const users: ObjectSigniture = {
  1: {
    name: '진우태',
    age: 20
  },
  2: {
    name: '성재원',
    age: 21
  }
}

// 사용자 데이터를 업데이트 하는 함수 구현
// : id값을 사용하여 해당 데이터의 name 또는 age 값을 수정
function updateUser(id: number, changes: Partial<User>) {
  const user = users[id]; // User 타입의 객체: 객체의 속성값이 number이기 때문에 id값으로 지정

  if(!user) {
    console.log('해당 ID의 사용자는 없습니다.');
  }

  // changes 매개변수: name과 age 속성이 모두 선택적 프로퍼티
  // [경우의 수]
  // name만 있는 경우: {name, age, name} >> changes의 name으로 값이 수정
  // age만 있는 경우: {name, age, age} >> changes의 age로 값이 수정
  // name가 age 둘다 있는 경우: {name, age, name, age} >> 모든 값이 changes로 수정
  // name과 age 둘다 없는 경우: 수정 x

  users[id] = {...user, ...changes};
}

updateUser(1, {name: '윤영서'}); 
console.log(users[1]); // { name: '윤영서', age: 20 }
updateUser(2, {age: 30});
console.log(users[2]); // { name: '성재원', age: 30 } 
updateUser(3, {name: '문창배'}) // 해당 id의 사용자는 없습니다.

updateUser(2, {name: '전창현', age: 25});
console.log(users[1]);

updateUser(2, {});
console.log(users[2]);

