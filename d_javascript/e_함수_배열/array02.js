// === 데이터 복사 === //
// ! 1. 일반 자료형
// : 원본 데이터와 복사된 데이터가 별도 저장
// - 서로 영향을 끼치지 않음
let num1 = 10;
let num2 = num1;

console.log(num2); // 10
num2 = 20;
console.log(num1); // 10  >> 원본 데이터가 유지됨
console.log(num2); // 20

// ! 참조 자료형
// : 변수명을 할당하는 형식의 복사는 '주소값'의 전달
// - 원본 데이터 수정 시 같은 주소 체계를 가진 복사 데이터도 '함께 수정됨'

let array01 = [11, 22, 33];
let array02 = array01;

console.log(array02); // [11, 22, 33]

array01[1] = 55;
console.log(array02); // [11, 55, 33]

array02[2] = 66;
console.log(array01); // [11, 55, 66]

// >> 원본과 복사본 사이의 값이 공유

array02 = [1, 2, 3]; // 새로운 배열의 주소 체계가 담김: array01과 array02의 주소가 달라짐
console.log(array01); // [11, 55, 66]
console.log(array02); // [1, 2, 3]

// ? 원본과 복사본의 독립성을 보장 + 복사
// 스프레드 연산자(...)
// : 배열 또는 객체의 요소를 개별 요소로 확장
// || 여러 요소를 하나의 형태로 결합 시 사용

// 1) 개별 요소 확장
let sports = ['축구', '야구', '농구'];
let copy = ['배구', ...sports, '수영'] // 독립적인 주소 체계 + 요소의 복사
let copySports = [...sports];

console.log(copySports); // [ '축구', '야구', '농구' ]
console.log(copy); // [ '배구', '축구', '야구', '농구', '수영' ]

copySports[0] = 'soccer'; // >> 복사본의 요소를 바꿔도
console.log(sports[0]); // 축구 >> 원본은 그대로 유지 

// 2) 하나의 형태로 결합
let mergeSports1 = [...sports, ...copy];
let mergeSports2 = [...copy, ...sports]; // 요소의 순서를 다르게

console.log(mergeSports1);
console.log(mergeSports2);

