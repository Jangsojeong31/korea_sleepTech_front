export const tmp = '';

// ! 타입 별칭(type alias)
// : 새로운 타입 이름을 생성하여 기존 타입을 참조할 수 있게 하는 기능
// - 코드의 재사용성과 가독성 향상

// ? 기본 사용 방법
// : type  키워드 사용
// 구조) type 타입별칭 = 타입;

// ? 타입 별칭 지정 시 UpperCamelCase 사용 권장

// & 1) 변수 타입 별칭: 굳이 사용x
type TextType = string;
let textMsg: TextType = '텍스트 문자열입니다';

type NumberType = number;
let num: NumberType = 123;

// cf) 원시 타입 키워드 그대로 사용하는 것이 코드 해석에 도움

// & 2) 객체 타입 별칭
// : 선택적 프로퍼티 & 읽기 전용 속성 모두 사용 가능
type UserType = {
  name?: string;
  readonly age: number;
}

const user1: UserType = {
  // name: 'lee',
  age: 35
}

// user1.age = 20; => 재할당 불가

const user2: UserType = {
  name: 'park',
  age: 40
}

// & 3) 함수 타입 별칭
// : User 타입인 매개변수를 받아 boolean 타입의 반환값을 생성하는 함수
type User = {
  id: string;
  password: string;
}
// 함수 타입 별칭
// type 타입별칭 = (매개변수 타입 지정) => 반환타입;
type ValidUser = (user: User) => boolean;

const isValidUser: ValidUser = (user) => user.id !== '';

let userA: User = {
  id: 'wqe',
  password: 'qwe'
}

let userB: User = {
  id: '',
  password: 'etr'
}

console.log(isValidUser(userA)); // true
console.log(isValidUser(userB)); // false

// ? cf) 함수 타입 지정 시 반환 값이 없는 경우 void 타입

// ? 함수 타입별칭 지정 시 주로 화살표 함수를 사용
// => 함수 타입 별칭 사용 함수는 반드시 화살표 함수의 체계를 가져야 함
type FuncType = (num: number) => number;

// const exampleFunc: function(num): FuncType {
//   num *= 2;
//   return num;
// }
const exampleFunc: FuncType = (num) => {
  num *= 2;
  return num;
}

// 아래처럼해도 가능
const exampleFunc2 = (num: number): number[] => {
  return [num, num];
}

// === 타입 별칭 사용 예제 ===

//! 문제 1: 타입 어노테이션 사용
// 변수 age를 선언하고 숫자 타입으로 어노테이션을 지정
// 변수 isStudent를 선언하고 불리언 타입으로 어노테이션을 지정
// 위 두 변수에 적절한 값을 할당하고, 콘솔에 출력
let age: number;
let isStudent: boolean;
age = 13;
isStudent = true;
console.log(age);
console.log(isStudent);

//! 문제 2: 타입 별칭 사용
// ProductType이라는 타입 별칭을 생성
// 객체, id (문자열 타입), name (문자열 타입), price (숫자 타입) 속성 포함
type ProductType = {
  id: string;
  name: string;
  price: number;
  // +) 타입 별칭 생성 중 속성을 구분할 때 ,(콤마)와 ;(세미콜론) 모두 사용 가능한데
  // >> 일반 객체와의 구분을 위해 세미콜론 사용 권장
}

let product: ProductType = {
  id: 'wer',
  name: 'wer',
  price: 13000
}

