console.log('Hello Typescript'); 
// 출력 가능

// TS 코드는 실시간으로 JS 컴파일이 되지 않는다.
//  : TS 문법 코드는 node 파일명.ts로 실행되지 않는다.
let num: number = 3;
// num = '안녕하세요'; => 'string' 형식은 'number' 형식에 할당할 수 없습니다.
console.log(num);
// 출력 불가

// ! ts -> js 컴파일 하기
// 1. tsc 파일명.ts   => 같은 파일명의 js 파일 생성
// 2. node 파일명.js   => 컴파일된 js 파일을 Node.js 런타임 환경에서 실행

// ! ts-node
// : 실시간 컴파일 및 실행
// : js 파일이 생성되지 않는다. 

// ? node 환경의 의존성은 !반드시! node_modules 폴더가 위치하는 프로젝트 최상단에서 설치(f_typescript)
// ts-node 설치:
// npm install -g ts-node
// npm install ts-node --save-dev

console.log('ts-node로 ts파일 생성하기');

// ! git 업로드 시 node_modules 폴더 제외하고 업로드
// : .gitignore 파일 생성  
// 파일 내용:
// # node-modules 깃 업로드 방지
// node_modules/
// */node_modules

// ! 해당 프로젝트를 pull한 경우(node_modules 없이 pull 됨)
// : f_typescript(node_modules 폴더가 존재해야하는 위치)
// - npm install => node_modules를 다시 생성