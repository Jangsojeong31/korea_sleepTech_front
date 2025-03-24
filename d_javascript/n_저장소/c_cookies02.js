// ! 쿠키 설정
document.cookie = "cookies02=쿠키2; path=/;"

// cf) live server의 도메인
// http://127.0.0.1:5500

// cf) 현 파일의 live server 경로
// /d_javascript/n_%EC%A0%80%EC%9E%A5%EC%86%8C/c_cookies02.html

// ! 쿠키값 가져오기
// 1) document.cookie에서 반환된 문자열 분석
// 2) 특정 쿠키 이름을 찾아 해당 값을 추출 

// ? 쿠키 문자열을 분리
// : 웹 문서에 저장된 쿠키로부터 문자열을 ;세미콜론을 기준으로 분리해서
//   개별 쿠키를 배열로 반환

function getCookieValue(cookieName) {
  let cookies = document.cookie.split(';');
  
  let length = cookies.length;

  for(let i = 0; i < length; i++) {
    let cookie = cookies[i]; // 배열 순회 + 각 쿠키를 변수에 저장

    let parts = cookie.split('=');  // 쿠키를 이름과 값으로 분리
    let name = parts[0].trim();
    if(name === cookieName) {
      return parts[1] || ''; // 값이 있으면 반환, 없으면 빈 문자열을 반환

    }

  }
  return '';
}

let username = getCookieValue('username');
console.log(username); // lsa

let userAge = getCookieValue('userAge');
console.log(userAge); // ''

// +) 쿠키값 변경
document.cookie = "username=이승아;";

let changedUsername = getCookieValue('username');
console.log(changedUsername); // 이승아

// ! 쿠키값 삭제
// : 만료날짜를 과거로 설정
// - 브라우저가 쿠키를 유효하지 않음으로 인식하여 삭제 처리

function deleteCookie(cookieName) {
  document.cookie = cookieName + "=; expires=Wed 20 Feburary 2025 00:00:00 GMT; path=/;";
}

deleteCookie('username');
deleteCookie('userEmail');
deleteCookie('cookie02');