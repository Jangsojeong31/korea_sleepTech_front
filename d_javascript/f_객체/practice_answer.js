// & 문제1
let person = {
  name: '장소정',
  age: 26,
  inStudent: true
}

let fruits = ['사과', '바나나', '키위'];
console.log(fruits[1]);

function add(a, b){
  return a + b;
}

// & 문제 2

// for in 반복문
// 객체: 객체의 키값 순회, 키값 반환
for (const key in person) {
  console.log(`${key}: ${person.key}`);
}
// 배열: 배열을 순회하며 각 요소의 인덱스를 변수에 할당
let array = [1, 2, 3, 4, 5];
for (let num in array){
  console.log(array[num]);
}

let upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
// fruits.map(function(fruit){return fruit.toUpperCase()})
console.log(upperCaseFruits);

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
function combineArrays(arr1, arr2) {
  // arr1을 전체 순회: 각 요소의 값과 그 요소의 인덱스 번호 추출
  // >> 인덱스 번호값을 통해 arr2의 동일한 인덱스의 요소와 더하기
  let result = arr1.map((element, index) => {
    return element + arr2[index];
  });
  
  return result;
}
console.log(combineArrays(arr1, arr2));

// & 문제 3
function deepCopy (person){
  return JSON.parse(JSON.stringify(person));
}

let personCopy = deepCopy(person);

personCopy.name = '이도경';
console.log(person);


const users = [
  {name: "John", age: 25},
  {name: "Jane", age: 17},
  {name: "Doe", age: 18}
];

function adultUserName (users) {

  return users
    .filter(user => user.age >= 18)
    .map(user => user.name);
}



console.log(adultUserName(users)); // [ 'John', 'Doe' ]
