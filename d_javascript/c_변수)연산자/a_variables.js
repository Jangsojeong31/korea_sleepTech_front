// ! 변수: 데이터를 저장하기 위한 공간

// * 필수 변수 명명구칙
// - 첫문자로 영문자, _, $만 가능(이후 숫자 가능)
// - 띄어쓰기 허용 x
// - 영어 대소문자를 구분(num, Num을 각각 다른 변수)
// 예약어 사용x

// let 1num;
// let num ber;

// * 선택 변수 명 명규칙
// lowerCamelCase 권장

// now, _now, now$25, now_25 (o)
// 25now, now 25, *now (x)

// ? 올해 연도(currentYear), 태어난 연도(birthYear)
// 나이: age = currentYear - birthYear;

// ! js 변수 선언 방식 (2가지 - let, var)
// 1) 변수 선언 방법
// 변수종류 변수명;

// 2) 변수 할당(대입)
// 변수명 = 테이터(값);

// 3) 초기화: 변수종류 변수명 = 데이터(값)

// cf) Variable: 변수
let letVar;
var varVar;

letVar = 10;
varVar = 'Hello World';

// letVar2 = 30; // 호이스팅 : 선언 전에 값 할당 가능

let letVar2 = 20;
var varVar2 = 'Hello JavaScript';

// ! let vs var
// ? 1. 공통점: 재할당 가능, 호이스팅 o 

// cf) 호이스팅
//  : 인터프리터(코드를 읽는 기기)가 코드를 실행하기 전 변수, 함수, 클래스 등의 선언문을 해당 볌위의 맨 위로 올리는 것

// +) let의 호이스팅

// cf) TDZ(temporal dead zone): 변수가 선언되고 초기화되기까지의 공간
// >> let, const로 선언된 변수는 tdz에 있을 경우 사용 불가!
// +) var는 tdz는 변수값 사용이 가능!

// ? 2. 차이점
// ? let: 동일한 영역 내에서 재선언 불가
// ? var: 동일한 영역 내에서 재선언 가능

// let letVar2; // 오류: 재선언 불가
// let varVar2; // 재선언 가능

// ! 변수 선언 예시(나이 계산 프로그램)
let currentYear = 2025;
let birthYear = 2000;
let age;

age = currentYear - birthYear;

// 변수와 문자열 동시 출력: + 연산자 사용(연결)
console.log(birthYear + '년도에 태어난 사람의 나이는 ' + age + '세입니다.');

// ! 상수(constant)
// : 변하지 않는 수, 재할당 불가

// ? 상수 명명 규칙 (필수 - 변수와 동일, 선언과 동시에 할당)
// 선택 규칙
// : UPPER_SNAKE_CASE


const PI = 3.14;
// PI = 2.14; // error
