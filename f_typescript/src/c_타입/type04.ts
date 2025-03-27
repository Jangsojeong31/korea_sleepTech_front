export const tmp = '';

// ! === Union 타입 === //
// : 여러 타입 중 하나가 될 수 있는 값을 나타내는 방법
// - 값에 허용된 타입을 두 개 이상으로 지정
// - OR 연산자 (A 또는 B... 중에서)
// - vertical bar(|) 기호를 사용하여 표현

// ? 유니언 타입의 사용
// type UnionType = Type1 | Type2 | Type3 ...;

type VaraibleType = string | number | boolean | string[];

let value: VaraibleType = "문자";
value = 123;
value = true;
value = ['2025', '3094'];

// cf) TS는 변수의 타입이 어노테이션 또는 초기화 값으로 지정됨
//    >> 유니언 타입은 타입에 대한 '확장성'을 가짐 (무한한 확장성은 아님)

// ? 타입 별칭 사용 예시
// 'A'는 회원이면서 관리자
type User = {
  // 회원 객체가 가져야할 속성
  id: string;
  password: string;
  name: string;
  address: string;
}

type Admin = { // 관리자(administrator)
  id: string;
  password: string;
  department: string; // 부서

}

// 위 두가지 계정을 가지는 사이트 계정
// cf) 타입 별칭이 유니언 타입인 경우: 중복되지 않은 속성은 옵셔널(?) 속성과 동일

type AdminUser = Admin | User;
// id, password는 필수, 나머지는 옵셔널 속성이지만 Amind이나 User 둘 중 하나는 만족해야함
// type AdminUser = {
//   id: string;
//   password: string;
//   name?: string;
//   address?: string;
//   department: string;
// }
// 또는 
// type AdminUser = {
//   id: string;
//   password: string;
//   name: string;
//   address: string;
//   department?: string;
// }

let lsa: AdminUser = {
  id: 'lsa',
  password: 'lsa123',
  // name: '이승아',
  // address: '부산진구',
  department: '교육부'
}

let ldk: AdminUser = {
  id: 'ldk',
  password: 'ldk123',
  name: '이도경',
  address: '동래구',
  // department: '교육부'
}

// ? 타입 별칭에서 union 타입 사용 시
// : 정확한 타입 지정을 위해 '타입 가드'르 사용
// cf) 타입 가드: 조건문을 통해 타입을 좁혀나가는 방식

type Union = number | string;

function getAge(age: Union) {
  // 나이가 전달될 경우 조건
  // - 숫자: 소수점 자리가 없도록 반올림 + 문자열로 변환 (.toFixed())
  // - 문자열: 대문자로 변환하여 변환 (.toUpperCase())

  // cf) 데이터의 타입을 반환하는 연산자: typeof

  // age.toFixed();
  // age.toUpperCase();
  // 유니언 타입의 경우 정확한 타입이 정해지기 전에는, 전체 타입의 공통된 속성만 사용 가능

  if (typeof age === 'number') {
    age = age.toFixed();
    return age;
  } else { // number가 아니라면 string이다.
    age = age.toUpperCase();
    return age;
  }

}

console.log(getAge(12.345)); // 12
console.log(getAge('12 years old'));  // 12 YEARS OLD

