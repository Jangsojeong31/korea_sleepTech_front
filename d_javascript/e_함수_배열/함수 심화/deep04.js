// == js의 내장 함수 > 콜백함수를 사용(고차함수) == //
// ! 타이머 함수
// : 특정 시간 이후에 함수를 실행 or 일정 간격으로 함수를 반복 실행 가능

// 1) setTimeout(콜백함수, 시간);
// : 지정된 시간 이후, 제공된 콜백함수를 단 한번만 실행

// cf) 시간 단위: 밀리초(1s = 1000ms)

function greet(name = '이승아') {
  console.log(`Hello, ${name}`);
}

greet();

// cf) 기존의 함수 호출: 함수명();
// greet 가 콜백함수로 작용하기 위해서
// 인자로 함수명만 작성
// 함수명()으로 작성 시 , 그 부분을 읽을 즉시 함수가 실행되기 때문
setTimeout(greet, 2000); // 2초 뒤 실행
// +) 세 번쨰 인자부터 나열되는 값이 콜백 함수의 매개변수로 전달
setTimeout(greet, 3000, '이도경'); // 3초 뒤 실행됨 

setTimeout(function() {
  console.log('4초 뒤에 실행됩니다.');
}, 4000);

// cf) 타이머 취소: clearTimeout(타이머 ID);
// >> setTimeout으로 설정한 타이머를 제거

// +) setTimeout()은 타이머 ID를 자동 반환
const timeId = setTimeout(greet, 2000, '이도경');
console.log(timeId); // 앞의 시간이 걸리는 코드보다 먼저 출력됨(순서대로 출력x)
clearTimeout(timeId);

// ! setInterval(콜백함수, 시간);
// : '지정된 시간 간격마다' 함수를 반복해서 실행
// >> 사용법: setTimeout과 유사
// cf) clearInterval(id)

let count = 1;
let id = setInterval(() => {
  console.log(`3초마다 실행됩니다. ${count} 번째`);
  count++;
}, 3000); // 무한실행
setTimeout(() => {
  console.log('타이머를 종료합니다.');
  clearInterval(id);
}, 15000); // 15초 이후 실행(setInterval 종료)
