/*
검색 필터 기능
*/

document.addEventListener('DOMContentLoaded', () => {
  const inputField = document.querySelector('#search-input');
  const list = document.querySelector('#item-list');
  const items = document.querySelectorAll('li');
  const noResult = document.querySelector('#no-result');

  // 검색어 입력 시 입력값과 list의 내용 값을 비교하는 이벤트 핸들러 정의
  // 이벤트 핸들러: 'input' 시 호출되는 함수
  inputField.addEventListener('input', () => {
    let value = inputField.value.toLowerCase();

    let visibleItemsCount = 0;

    items.forEach(item => {
      
      if(item.textContent.toLowerCase().includes(value)){
        item.style.display = '';
        visibleItemsCount++;
      } else {
        item.style.display = 'none';
      }
    });

    noResult.style.display
      = visibleItemsCount > 0 ? 'none' : 'block';
  });
});