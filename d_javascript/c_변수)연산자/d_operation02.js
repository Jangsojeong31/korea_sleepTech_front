// ! 4. 논리 연산자
// : 논리값 연산(boolean 반환)
// 1) AND 연산자(&&) ; 논리곱
// : 하나라도 false면 false

// ? cf) 자바스크립트 '단락 평가'
// : 논리연산에서 첫 번째 피연산자 값만으로 해당 식의 결과가 확실할 때, 두번째 값은 평가하지 않는것 
// ex) false 뒤에 &&가 나오면 다음 값은 확인하지 않아도 결과는 false
//      true 뒤에 ||가 나오면 다음 값은 확인하지 않아도 결과는 true

// 2) OR 연산자(||) ; 논리합
// : 하나라도 true면 true

// 3) NOT 연산자(!) ; 부정논리
// : boolean 자료형의 데이터값 전환

// ! 5. 삼항(조건) 연산자
// : 유일하게 피연산자를 3개 가짐, 기호가 2개

// ? 기본 구조
// 표현식 ? 참일 경우 반환값1: 거짓일 경우 반환값2
let age = 21;
let beverage = age >= 20? 'Beer': 'Juice';
console.log(beverage);

// +) 삼항연산자의 중첩
//    : 조건의 계산 내에서 또 다른 조건의 계산이 이루어짐 

age = 19;
let identity = age >= 20 ? '성인' : (age < 13 ? '어린이' : '청소년');
console.log(identity );

// ? 덧셈 연산자
// - 타입이 모두 숫자: 산술 연산의 덧셈
// - 타입이 하나라도 문자열일 경우: 문자열의 결합
let name1 = 'Lee';
let name2 = 'sojeong';
console.log(name1 + name2);

// ? typeof 연산자
// : 데이터에 대한 타입이 문자열로 반환
// +) 초기 js 설계 결함으로 null 데이터의 타입은 object를 반환
console.log(typeof null); // object