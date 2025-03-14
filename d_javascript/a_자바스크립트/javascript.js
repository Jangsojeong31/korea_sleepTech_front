// 자바스크립트 파일 확장자: .js
// 주석 

// 간단한 예제
// 기능 : 버튼을 클릭하면 새로운 이름을 입력받는 창이 생성,
//        작성된 이름으로 버튼 내의 PlAYER 명을 변경

// 현재 웹문서에서 button 태그를 찾아 저장
const button = document.querySelector('button') // 변수에 주소값 저장

// 저장된 변수에 클릭 이벤트를 추가
button.addEventListener('click', updateName);

// updateName: 새로운 입력을 입력받고 버튼을 수정하는 기능
function updateName(){
  const name = prompt('새로운 이름을 입력해주세요.');
  button.textContent = `Player 1: ${name}`;
}



