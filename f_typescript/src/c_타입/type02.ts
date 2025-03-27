export const tmp = '';

// ! 타입 스크립트 객체 타입

// ? 1. 객체 타입 지정(명시)
// : {} 중괄호 사용
// - 각 데이터별(속성별) 타입 명시의 구분은 세미콜론 사용 권장

const user: {
  // ? 타입에서 명시한 속성은 반드시 객체 내부에 존재해야 함
  name: string;
  height: number;
  favorite: any; // 배열 내에 다양한 타입의 요소
  age: number; 
} = {
  // 객체 내부에서 각 속성의 구분: , 사용
  // ? 타입 명시하지 않은 속성은 사용할 수 없다.
  name: '이승아',
  height: 169,
  favorite: [1, '운동', false, null, undefined],
  age: 58
}

// ! 객체 선택 속성(선택적 프로퍼티)
// : 속성명 뒤에 물음표(?)를 붙여 해당 속성이 존재하지 않을 수도 있음을 표현
const ldk: {
  name: string;
  height?: number; // 해당 속성이 객체에 없어도 된다.
} = {
  name: '이도경',
}

// ! 읽기 전용 속성
// : 속성명 앞에 readonly 키워드 사용
// - 해당 속성의 재할당 불가
// - const와 유사한 기능(상수)
const readonlyUser: {
  readonly name: string;
  readonly age: number;
  address?: string;
} = {
  name: '이승아',
  age: 30,
  address: '부산시'
}

// 객체의 속성값 수정
// readonlyUser.name = '이도경'; // 읽기 전용 속성이므로 'name'에 할당할 수 없습니다.
// readonlyUser.age = 57;
readonlyUser.address ='대전시'; // 재할당 가능

console.log(readonlyUser); // { name: '이승아', age: 30, address: '대전시' }