
// ! 객체의 속성 존재 여부 확인
// : 객체에 존재하지 않는 속성에 접근: undefined
let obj = {
  name: '이승아',
  age: 30,
  job: 'developer'
}

if(obj.name !== undefined) {
  console.log(obj.name);
}else {
  console.log('name 속성 x');
}

// +) 조건문을 연산자로 검증
// 논리연산자
// 1) or 연산자: 하나라도 true면 true
obj.name || console.log('name 속성 x');
obj.hobby || console.log('hobby 속성 x'); // hobby 속성 x

// 2) and 연산자: 모두 true여야 true

