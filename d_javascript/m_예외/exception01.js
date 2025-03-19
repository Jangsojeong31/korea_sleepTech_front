// ! 자바스크립트 예외

// cf) 오류(error)
// : 부정확하거나 유효하지 않은 동작

// ! 1. 예외의 종류
// 1) '구문'
// : 프로그램 실행 전에 발생, 코드 작성 시
// - 문법이 언어에서 정의된 규칙을 따르지 않을 때 발생

console.log('== 구문 오류 예제 ===');
// console.log(objec

// 2) 런타임
// : 프로그램 실행 중에 발생
// - 예측 가능한 비정상적인 조건 또는 예외적인 사건을 의미
// - 코드가 순차적으로 실행되거나 오류 위치에서 실행 중단

console.log('== 런타임 오류 예제 ===');
// console.rog('log를 rog로 잘못 입력함')
// : 오타 수정만으로 해결 가능한 오류가 많다. 

// ? JS에서는 SyntaxError로 출력되는 오류 외 모든 오류가 예외(런타임 오류)로 분류

// ! JS 실행 중 발생하는 예외 다루는 방법
// : 예외 처리

// 1. 기본 예외 처리: 조건문 사용 - 권장 x
document.addEventListener('DOMContentLoaded', () => {
  // HTML에 존재하지 않는 요소를 가져온 경우 => null 반환
  const h1 = document.querySelector('h1');
  // null 값 사용: null을 연산하거나 접근하는 경우 런타임 오류 발생
  // h1.textContent = '안녕하세요'; // => 오류 발생

  // 조건문으로 예외 처리
  if(h1) {
    h1.textContent = '안녕하세요';
  }else{
    console.log('h1 태그는 존재하지 않습니다.');
  }

  console.log('다음 로직');
})

// 2. 고급 예외 처리: try-catch 문(try-catch-finally)
/*
구조: 
try{
  예외 발생 가능 로직
}catch(e or exception or error) {
  예외 발생 시 로직
} finally { // 선택
  무조건 실행 
}
*/

function randomException() {
  if(Math.random() < 0.5){
    throw new Error('무언가 잘못됨');
    // 50%의 확률로 에러 발생
  }
  return '성공적';
}

try{
  const result = randomException();
  console.log(result);
  console.log('try 구문의 마지막 줄 - 예외 발생 시 출력안됨');
}catch(e){
  console.log('catch 구문');
  console.log(e.message);
}finally{
  console.log('언제나 실행');
}
