// 실행 파일

// ! 1) add: Name Import
// 내보내는 모듈에서 이름을 지정
import {add} from './mathModule.js'
console.log(add(10, 5));

// ! 2) substract: Default Import
// : 기본 내보내기 - 사용하는 모듈에서 이름 지정 가능
import substract from './mathModule.js';
console.log(substract(5, 3));

// ! 3) multiply: Named Import (as 구문)
import {multiply as mp} from './mathModule.js';
console.log(mp(5, 6));

// ! 4) divide: 모듈 전체 가져오기 
import * as mathModule from './mathModule.js';
console.log(mathModule.divide(8, 2));