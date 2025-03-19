// ! 구조분해할당( 다중 할당)
// : 배열과 객체의 값을 한번에 여러 개의 변수에 할당

// ? 형태:
// [식별자, 식별자..] = 배열;
// {속성명, 속성명... } = 객체;
// cf) 식별자: 변수를 나열한 형태

let array = [1, 2, 3];
let [a, b] = array;
// 아래와 동일
// let a = array[0];
// let b = array[1];

// >> 배열의 크기는 같을 필요 없다: 넘치는 값은 생략됨

const array2 = [1, 2, 3, 4, 5];
const [a2, b2, c2] = array2;


// == 객체 생성 == //
const bookObject = {
  name: 'JS 공부하기',
  price: 25000,
  publisher: '코리아 IT'
}
// 배열과 달리 순서는 상관 없다: 각각 연결된 속성명으로 값이 자동 전달됨
// 해당하는 속성이 없으면 undefined
const {publisher, name, price, author} = bookObject;
console.log(publisher, name, price, author); // 코리아 IT JS 공부하기 25000 undefined

// cf) 속성명을 변수로 지정하지 않고 새로운 식별자 사용
const {aaa = name, bbb = price} = bookObject; // 식별자 = 속성명

