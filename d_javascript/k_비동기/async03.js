// ! Promise(프로미스)

// ! 1. 프로미스란
// : 비동기 작업의 완료 또는 실패를 나타내는 '객체'
// - 콜백 지옥을 피하고, 비동기 처리에 대한 가독성 향상
// - 현재는 알 수 없지만, 나중에 결과를 나타낼 수 있는 값


// ! 2. 프로미스 상태 (3가지)
// 1) 대기 pending
// : 초기 상태, 비동기 연산이 완료되지 않은 경우

// 2) 이행 fulfilled
// : 비동기 연산이 성공(완료)된 상태
// : 프로미스가 결과값을 반환한 상태

// 3) 거부 rejected
// : 비동기 연산이 실패한 경우
// : 프로미스가 에러를 반환

// ! 3. 프로미스 생성 및 사용방법
// : new Promise() 생성자 함수 사용

// cf) 프로미스의 결과에 따라 두 함수 중 하나를 실행
//    : 프로미스 내 콜백함수의 인자로 자동 전달
// - resolve(value): 대기 -> 이행 상태로 변경, value 반환
// - reject(error): 거부 상태로 변경, error 반환

const myPromise = new Promise((resolve, reject) => {
  const condition = true;

  if(condition) { // 작업 성공 조건
    resolve('프로미스 성공');  
  }else{
    reject('프로미스 실패');
  }
});

// ! 4. 프로미스 메서드 사용
// : new Promise()를 통해 생성된 프로미스 객체 내부의 메서드

// 1) .then()
//  : 프로미스 이행 시 호출 - resolve를 받음

// 2) .catch()
//  : 프로미스 거부 시 호출 - reject를 받음

// 3) .finally()
//  : 성공/실패 여부와 상관없이 실행될 콜백 함수 등록

// cf) 메서드 체이닝(연결) 방식 사용 - 콜백지옥 완화
myPromise
  .then((result) => {
  console.log(result);
  return '다음 수행 시 필요한 데이터'
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('무조건 실행');
  });
  // 결과
  // 프로미스 성공
  // 무조건 실행

  myPromise
    .then((result) => {
    console.log(result);
    return '다음 수행 시 필요한 데이터'
    })
    .then((nextResult) => {
      console.log(nextResult);
      return '세 번째 작업에 필요한 데이터'
    })
    .then((thirdResult) => {
      console.log(thirdResult);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log('무조건 실행');
    });

// === 프로미스 예시 (체이닝 & 에러) ===
// 데이터 가져오기
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('데이터가져오기 성공'), 3000);
  });
}

// 데이터 처리하기 
function processData(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${data} 사용하기`), 3000);
  });
}

fetchData() // => Promise 객체가 반환됨
  .then(result => processData(result))
  .then(processResult => console.log(processResult))
  .catch(error => console.log(error))

// 결과: 데이터가져오기 성공 사용하기

// 메인 로직
console.log('메인 로직 실행(시간이 많이 걸리지 않는 작업');
