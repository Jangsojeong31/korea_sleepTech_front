// 비동기 프로그래밍 + 콜백함수

// 콜백함수 
// function greet(name) {
//   console.log(`hello, ${name}`);
// }

// // 메인함수
// // : 사용자의 입력을 처리하는 함수
// function getUserInput(callback) {
//   let name = prompt('이름을 입력해주세요');

//   callback(name);
// }

// getUserInput(greet);

// == 콜백함수를 사용하는 비동기 예시 ==
// : 서버와 통신

// cf) fetch: 가져오다
function fetchUserData(userId, callback) {
  // 시간에 대한 소요: setTimeout() 함수를 사용하여 구현
  setTimeout(() => {
    // 서버로부터 가져온 데이터
    const userData = {
      // 가상의 사용자 데이터
      id: userId,
      name: '이승아',
      email: 'devgiants75'
    };

    callback(userData);
  }, 3000); // 3초뒤 출력
}

// 콜백함수
function handleUserData(user, callback) {
  console.log(`User Data: ${user.name}`);

  // 중첩된 콜백함수
  callback();
}


fetchUserData(1, handleUserData); // 비동기 처리 출력
console.log('비동기적인 출력'); // 메인 로직
// >> 메인로직 먼저 출력됨

// 콜백함수의 중첩의 문제점 => 콜백지옥
// >> Promise 기반의 비동기 처리 프로그래밍 사용
