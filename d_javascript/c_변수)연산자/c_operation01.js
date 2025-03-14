// === 연산자(operation) === //
// : 수학적 계산을 위한 코드 (산술, 할당, 비교, 논리)

// ! 산술 연산자
// 사칙연산 
// ++, --, %(나눗셈-나머지)

let x = 10;
let y = 3;
console.log('== 산술연산자 ==');
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y); // 3.3333
console.log(x % y); // 1

// cf) 증감연산자: 수를 1씩 증가 또는 감소
//    >> 1항 연산식
x = 10;
console.log(x++);
console.log(++x);

// ! 2. 할당(대입) 연산자

// ! 3. 비교 연산자
// : 결과를 boolean 값으로 반환(상대적인 크기를 비교)

// 부등호(>,<,>=,<=), 동등(==), 부등(!=)
// 일치(===), 불일치(!==)

let value1 = 10; // number
let value2 = '10'; // string

// 1) 동등과 부등
// : 값의 동일성을 판단, 데이터 유형 고려x
console.log(value1 == value2); // true

// 2) 일치, 불일치 (권장)
// : 값과 데이터 유형의 완전한 동일성을 판단
console.log(value1 === value2); // false

// cf) 문자열 비교 연산자: 정렬(기본값 - 오름차순)
// >> a -> z로 갈수록 큰값
let str1 = 'abc';
let str2 = 'bcd';

console.log(str1 > str2); // false
console.log(str1 == str2); // false
console.log(str1 < str2); // true

