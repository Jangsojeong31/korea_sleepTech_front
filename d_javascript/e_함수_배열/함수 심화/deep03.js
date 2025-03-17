// ! 배열의 고차 함수 메서드
// & reduce()
// : 배열의 각 요소에 대해 함수를 적용하여 '단일 값을 생성'

/* 
reduce 메서드의 인자값: 콜백함수, 초기값
구조: 배열명.reduce(function(축적값, 현재값, 현재인덱스, 배열) {}, 초기값)
화살표 함수로 표현: 배열명.reduce((축적값, 현재값, 현재인덱스, 배열) => {}, 초기값);
 */

// reduce의 축적값: 각 순회마다 축적되는 값(이전 작업물의 반환값, 첫 번째 호출에서는 '초기값' 지정)
// reduce의 초기값: 생략시 기본값 0

let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((acc, value) => acc + value, 0);
let sum2 = numbers.reduce(function(acc, value) { return acc + value;}, 100);

console.log(sum); // 10
console.log(sum2); // 110

// reduce 예시
let cars = ['audi', 'bmw', 'hyundai', 'kia'];

let combinedCar = cars.reduce((acc, car) => {
  return acc + car + ", ";
}, "Cars: ");

console.log(combinedCar); // Cars: audi, bmw, hyundai, kia,
console.log(typeof combinedCar); // string

// cf) 기타 배열의 고급 메서드
let numberArray = [3, 1, 5, 2, 7, 6];

// 1) sort(), reverse(): 정렬 메서드
console.log(numberArray.sort());
console.log(numberArray.reverse());

// 2) indexOf(), lastIndexOf(): 특정 요소의 인덱스를 찾는 메서드

// 3) find(), findIndex() 
// find(): 특정 조건을 만족하는 첫번째 요소 반환
// findIndex(): 특정 조건을 만족하는 첫 번쨰 요소의 '인덱스 반환'

let nums = [5, 4, 6, 1, 7, 2];
let firstOverFive = nums.find(num => num > 5);
let firstOverFiveIndex = nums.findIndex(num => num > 5); 

console.log(firstOverFive); // 6
console.log(firstOverFiveIndex); // 2