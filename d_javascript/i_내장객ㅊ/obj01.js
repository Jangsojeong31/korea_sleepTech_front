// ! JS 내장 객체
// : 특정 작업 수행이나 복잡한 기능을 담은 메서드와 속성 제공

// 1) Number 객체의 기본 메서드
// : 수치형 데이터를 처리하는 속성과 메서드를 포함한 js 내장 객체

// cf) 기본 자료형: number

// 1) toFixed(N): N자리까지 반올림
let num = 123.4567;
console.log(num.toFixed(3)); //123.147
console.log(num.toFixed()); // 123

// 2) isNaN(), isFinite()
// : 각각 NaN값, Infinity값인지 확인
// - Number 객체에서 호출

// 데이터 내부를 줄바꿈으로 나누고 각 요소르 ㄹ배열로 반환
manyData = manyData.spit('\n');
