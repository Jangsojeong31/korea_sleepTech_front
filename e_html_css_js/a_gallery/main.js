// == 기능 구현 == // 

// 1) thumb-bar의 이미지 클릭
// : 해당 이미지로 full-img 변경

// 2) button 태그에 클릭

// - 다크 모드 버튼일 경우
// : 버튼의 class 속성을 dark로 지정
// : 버튼의 textContent는 라이트 모드로 변경
// : overlay의 배경색 rgba(0,0,0,0.5)

// - 라이트 모드 버튼일 경우
// : 버튼의 class 속성을 light 지정
// : 버튼의 textContent는 다크 모드로 변경
// : overlay의 배경색 rgba(0,0,0,0)


const thumbBar = document.querySelector('.thumb-bar');
const displayedImage = document.querySelector('.displayed-img');
const button = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// 1)
thumbBar.addEventListener('click', (e) => {
  if(e.target.tagName === 'IMG') { // 클릭된 요소가 이미지일 경우
    // .tagName: 태그명이 대문자로 반환
    const imgSrc = e.target.src;
    displayedImage.src = imgSrc;
  }
})

// 2) 다크 / 라이트 버튼 기능 구현
button.addEventListener('click', () => {
  if(button.classList.contains('dark')){
    // .classList: 클래스 속성들을 배열로 반환
    // 배열/문자열.contains()
    button.textContent = '라이트 모드';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';

    button.classList.remove('dark');

  }else{
    button.textContent = '다크 모드';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';

    button.classList.add('dark');
  }
})
