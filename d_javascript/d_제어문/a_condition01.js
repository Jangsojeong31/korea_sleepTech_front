// cf) 제어문(control)
//    : 조건문, 반복문

// == 자바스크립트의 조건문 == //
// : 주어진 조건에 따라 코드 실행 흐름 제어
// : '조건'에는 주로 비교 연산자 활용
// 종류 : if, else, else if, switch 문


// ! 1) if/else/else if 문
let number = 10;
if (number > 0)  {
  console.log('양의 정수입니다.');
}

// cf) 변수명(식별자)을 활용한 조건 검증
//    >> false 값: 0, '', undefined, null 등

let stringData = '';
let numberData = 0;

if (stringData || numberData) {
  console.log('해당 코드는 실행되지 않습니다.');
}

// if/else/else if 예제
let num = 10;

if(num < 0) {
  console.log('음수입니다.');
}else if (num === 0) {
  console.log('0입니다.');
} else {
  console.log('양수입니다.');
}

// cf) 실행될 코드 블럭이 한 줄일 경우 코드 축약 가능 (like 자바)
let age = 14;

if (age < 13) console.log('어린이');
else if (age < 20) console.log('청소년');
else console.log('성인');

// ! 2) switch case 문
let fruit = 'banana';

switch (fruit) {
  case 'apple':
    console.log('사과');
    // 각 case 실행은 흐름을 제어하지 x 
    // 해당 case 이후 모든 코드를 실행 => break;의 필요성
    break;
  case 'banana':
    console.log('바나나');
  case 'train':
    console.log('바나나는 길어 길면 기차');
    break;
  default:
    console.log('일치하는 조건이 없음!');
}

// == if 조건문 vs 삼항 연산자 vs switch case문 == //
// 점수를 변수에 담아
// 해당 점수가 0미만 100 초과일 경우 '유효한 점수가 아닙니다.'

// 90점 이상: A
// 80점 이상: B
// 70점 이상: C
// 60점 이상: D
// 그 외의 경우 F 학점 >> 각 학점의 값을 grade 변수에 대입

let score; // 점수
let grade; // 학점
score = 35;

console.log('== switch문 ==');
// : 조건식에 true
switch (true) {
  case (score < 0 || score > 100):
    console.log('유효한 점수가 아닙니다.');
    break;
  case (score >= 90):
    grade = 'A';
    break;
  case (score >= 80):
    grade = 'B';
    break;
  case (score >= 70):
    grade = 'C';
    break;
  case (score >= 60):
    grade = 'D';
    break;
  default:
    grade = 'F';
}
console.log(`학점은 ${grade}입니다.`);


console.log('== if else문 ==');
if(score < 0 || score > 100) {
  console.log('유효한 점수가 아닙니다.');
}else if (score >= 90) {
  grade = 'A';
}else if (score >= 80) {
  grade = 'B';
}else if (score >= 70) {
  grade = 'C';
}else if (score >= 60) {
  grade = 'D';
}else { 
  grade = 'F';
}
console.log(`학점은 ${grade}입니다.`);


console.log('== 삼항 연산자 ==');
grade = 
score < 0 || score > 100 ? '유효한 점수가 아닙니다.' : 
score >= 90 ? 'A' :
score >= 80 ? 'B' :
score >= 70 ? 'C' :
score >= 60 ? 'D' :
'F';
console.log(`학점은 ${grade}입니다.`);


// ? 단락 평가
true || console.log('출력 A');  // 출력 안됨
true && console.log('출력 B');  // '출력 B'

// ? cf) 조건문 'Best Practice'
// 1) 비교 연산자 사용 시 '==' 대신 '===' 사용 권장

console.log(0 == false);  // true
console.log(0 === false); // false

// 2) 논리 자료형에 변수명(식별자) 사용 시 일치/불일치 생략 가능
let isTrue = true;
if (isTrue === true) console.log('isTrue는 참이다.'); 
if (isTrue) console.log('isTrue는 참이다.');

if (isTrue !== true) console.log('isTrue는 참이다.'); 
if (isTrue) console.log('isTrue는 참이다.');



