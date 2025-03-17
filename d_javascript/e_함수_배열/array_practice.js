// ! 1. 배열 합계 구하기

let array = [1, 2, 3, 4, 5];

function sumArray(array) {
  let sum = 0;

  let length = array.length;
  for(let i = 0; i < length; i++){
    sum += array[i];
  }
  return sum;
}

console.log(sumArray(array));
console.log(sumArray([24, 31, 76, 45]));

// ! 2. 특정 수 이상의 요소를 필터링

// 전달되는 배열안에서 10 이상의 요소만 필터링 >> 새로운 배열로 반환
function filterTen(array) {
  let filteredValue = []; // 10 이상의 요소를 담을 배열

  let length = array.length;

  for(let i = 0; i < length; i++){
    if(array[i] >= 10) {
      filteredValue.push(array[i]);
    }
  }
  return filteredValue;
}

console.log(filterTen([3, 4, 16, 14, 21])); // [ 16, 14, 21 ]

// ! 3. 배열 평균 구하기
function findAverage(array) {
  let sum = 0;
  let num = 0;
  let length = array.length;
  
  for(let i = 0; i < length; i++) {
    sum += array[i];
    num ++;
  }
  let average = sum / num;
  return average;
}

console.log(findAverage([1, 2, 3, 4, 5]));

// ! 4. 최대값 찾기
function findMax(array) {
  // let max = array.shift();
  let max = array[0];
  let length = array.length;
  
  for(let i = 1; i < length; i++) {
    if(array[i] > max){
      max = array[i];
    }
  }
  return max;
}

console.log(findMax([1, 2, 3, 4]));
