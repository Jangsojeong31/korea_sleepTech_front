// == 자바스크립트의 반복문 == //
// : for, while, do-while (for...in 반복문, for...of 반복문)

// cf) 자바스크립트 배열 선언
//    : 변수종류 변수명 = [요소 1, 요소 2, 요소 3..];

let fruits = ['apple', 'banana', 'mango'];
let numbers = [1, 2, 3, 4];
let bools = [true, false];
// 모든 타입이 동시에 가능
let js = [1, 'js', true, null, undefined, [1, 2, 3]];

/*
for (초기화식; 종료조건; 증감식) {
    표현 결과가 참인 동안에 실행
}
*/
console.log('=== for 반복문 ===');
for(let i = 0; i < 5; i++) {
  console.log(i);
}

// == 별찍기 == //
/*
*
**
***
****
*****
 */

// 행에 대한 반복: 5번 실행
for (let i = 1; i <= 5; i++){
  let stars = '';
  for (let j =0; j < i; j++) {
    stars += "*";
  }
  console.log(stars);
}

// while문 
let b = 0;
while (b < 5) {
  console.log(b);
  b++;
}

// do-while문: 조건 확인 전 반드시 한번은 코드 블록을 실행
let c = 0;
do {
  console.log(c);
  c++;
}while(c < 5);