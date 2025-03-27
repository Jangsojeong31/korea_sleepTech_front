document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('button');

  button.addEventListener('click', () => {
    window.location.href = "second.html";  
  })
});
// window.location.href
// : 브라우저에서 현재 페이지의 URL을 나타내는 속성
// window.location.href = '경로값';
// : 브라우저가 해당 url로 이동(리다이렉션)

// cf) 경로값
// : 현재 페이지 url을 기준으로 작성
// 1) 'second.html' | './second.html'
//  : 현재 페이지와 동일한 디렉토리에 있는 파일로 이동

// 2) '../파일명.확장자'
//    : 상위 디렉토리에 위치한 파일 검색

// 3) '/파일명.확장자'
//    : 루트 디렉토리에 위치한 파일을 검색