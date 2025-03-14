// == 자바스크립트 함수 구조: 매개변수/인자/반환값 == //
// ! 매개변수 vs 인자(인수)
// - 매개변수: 함수에 전달될 데이터를 담는 변수
// - 인자: 함수 호출 시 전달하는 값

function add(a, b) { 
  console.log(a + b);
}

add(3, 4); 

// ! 2. JS에서의 파라미터와 아규먼트 특징
// : 파라미터와 아규먼트의 수가 반드시 일치할 필요 x

function log(a) { // 파라미터: 1개
  console.log(a);
}

log(); // 인자: x => 결과: undefined
// >> 인자를 전달하지 않은 파라미터 값은 undefined
// ? cf) undefined: 변수를 선언하고 초기화 이전의 타입
log('Hi'); // Hi
log('Hi', 'Hello'); // 여러개의 인자: ,로 구분 => 결과: Hi
// >> 지정된 파라미터 수 이상의 인수는 읽히지 않는다.
// =================================================
function introduce(name, age) {
  console.log(`${name} is ${age} years old`);
}

introduce('이승아', 50); // 이승아 is 50 years old
introduce(50, '이승아'); // 50 is 이승아 years old
// >> 매개변수 순서대로 인자값이 전달됨

// ! 3. 반환값(return)
// : 결과를 반환
// - 함수 내에서 return 키워드가 읽히면 함수의 실행을 즉시 중단, return 뒤의 값을 반환

function substract(a, b) {
  let result = a - b;
  return result;
  // console.log('안녕하세요'); // return 이후의 코드는 읽히지 않는다.
}

let outcome = substract(10, 7);
console.log(outcome);

console.log(introduce('이도경', 30)); // undefined
// cf) return이 없는 함수는 실행 시 undefined를 반환
//    >> 일반적으로 즉시 콘솔 출력시 사용

// 연습문제 //
function square1 (x) {
  return x*x;
}
console.log(square1(3));  // 9

let square2 = function (x) {
  return x*x;
}
console.log(square2(4)); // 16

let square3 = x => x*x;
console.log(square3(2)); // 4