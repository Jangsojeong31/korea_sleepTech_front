// & 장바구니 시스템 // 

// ! === 프로그램 데이터 정의 === //
// 장바구니 내 물품
// 1) id: 숫자, 상품의 고유 식별자
// 2) name: 문자, 상품 이름
// 3) price: 숫자, 가격
// 4) quantity: 숫자, 수량

// ! === 프로그램 기능 정의 === //
// 장바구니의 각 제품에 대한 CRUD(추가, 조회, 수정, 삭제)

// cf) 추가 기능: 장방구니에 이미 존재하는 상품이면 수량 업데이트
//     수정 기능: 특정 상품의 수량 업데이트

// ! === 프로그램 구현 === //
let cart = []; 

// ? 1) 장바구니에 상품 추가
function addToCart(id, name, price, quantity) {
  // 장바구니 내에 상품이 존재하는지 검색
  // : findIndex
  // : 배열 내에 동일한 요소 검색 - 있으면 index 반환, 없으면 -1 반환
  const index = cart.findIndex(item => item.id === id);

  if(index > -1){
    // 상품이 이미 장바구니에 있을 경우 => 수량 증가
    cart[index].quantity += quantity;

  } else {
    // 상품이 장바구니에 없을 경우 => 새 상품 추가
    cart.push({id, name, price, quantity});
  }

  displayCart();
}

// ? 2) 장바구니 내의 모든 상품의 조회
function displayCart() {
  console.log('=== Cart contents ===');
  cart.forEach(item => {
    console.log(`${item.name} - Price: $${item.price}, Quantity: ${item.quantity}`);
    console.log(`Total ${item.name}'s Price: $${item.price * item.quantity}`);
  })
}

// ? 3) 특정 상품의 수량을 변경하는 함수
function updateQuantity(id, quantity) {
  const index = cart.findIndex(item => item.id === id);
  if(index > -1 && quantity > 0) {
    cart[index].quantity += quantity;
  } else {
    console.log('유효하지 않은 상품이거나 수량이 0보다 커야 합니다.');
  }
  displayCart();
}

// ? 4) 특정 상품을 삭제하는 함수
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  displayCart();
}

// ? 5) 장바구니의 총합을 계산하는 함수: reduce 함수 활용
function calculateTotal() {
  let total = cart.reduce((sum, item) => {
    return sum + (item.price * item.quantity)
  }, 0)
  console.log(`Cart Total Price: $${total}`);
}

// ? 6) 장바구니 전체 삭제(초기화)
function clearCart() {
  cart = []; 
  console.log('Cart is empty');
  displayCart();
}
// ! === 시스템 사용 === //
addToCart(1, 'banana', 3000, 3);
addToCart(2, 'orange', 2000, 1);

updateQuantity(1, 5);

removeFromCart(1);

addToCart(3, 'mango', 4000, 2);

calculateTotal(); 


