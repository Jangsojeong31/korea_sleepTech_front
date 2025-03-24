console.log('Hello Typescript');
// 출력 가능
// TS 코드는 실시간으로 JS 컴파일이 되지 않는다.
//  : TS 문법 코드는 node 파일명.ts로 실행되지 않는다.
var num = 3;
// num = '안녕하세요'; => 'string' 형식은 'number' 형식에 할당할 수 없습니다.
console.log(num);
// 출력 불가
// ts -> js 컴파일 하기
// 1. tsc 파일명.ts
