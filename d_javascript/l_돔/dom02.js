// ! DOM 조작하기

// cf) 문서 객체 가져오기
// ? head, title, body 등 가져오기
// document.head
// document.title

// ? body요소 내부에서 만들어진 요소들 가져오기
// querySelector()
// querySelectorAll()
// getElementById()

// ! 1) 글자 조작하기
// 문서 객체.textContent => 권장
// : 입력된 문자열 그대로 넣기

// 문서 객체.innerHTML
// : 입력된 문자열 HTML 형식으로 넣기

document.addEventListener('DOMContentLoaded', () => {
  // 가져오기
  const a = document.getElementById('textContent');
  const b = document.getElementById('innerHTML');

  // 글자 조작
  a.textContent = '<h2>textContent 속성</h2>';
  // 텍스트 자체가 내용으로 
  b.innerHTML = '<h2>innerHTML 속성</h2>';
  // HTML 문서 구조를 인식하고 해석한 뒤 내용만 삽입
  
})

// ! 2) 속성 조작하기
// : 문서 객체의 속성을 조작

// cf) HTML 요소의 부가 기능을 속성으로 작성
// === JS 객체의 속성: 객체의 기능을 명시(객체.속성명)

// 문서객체.setAttribute(속성이름, 값)
// : 특정속성에 값 지정
// 문서객체.getAttribute(속성이름)
// : 특정속성 값 추출

document.addEventListener('DOMContentLoaded', () => {
  const dogs = document.querySelectorAll('.dog');

  dogs.forEach((dog, index) => {
    const width = (index + 1) * 100 // 100 -> 200 -> 300 -> 400

    dog.setAttribute('width', width);
    dog.setAttribute('height', '250px');
    
    // cf) HTML 표준에 정의된 속성들(내장된 속성)은 setAttribute() 사용 없이 객체 접근 가능(.연산자 를 통해서)

    // dog.style.width = width + 'px';

    const source = '../사진.jpg';
    const alter = '사진 이미지';
    
    dog.src = source;
    dog.alter = alter;
  })
})

// ! 3) 스타일 조작하기
// : 문서 객체의 스타일 조작 시 style 속성을 사용
// ? cf) style 속성은 JS에서 객체로 인식
// : 문서객체.style.스타일속성명;
// 식별자를 lowerCamelCase 사용 권장
// ex) text-align => textAlign

document.addEventListener('DOMContentLoaded', () => {
  const divs = document.querySelectorAll('#container div'); 
  divs.forEach((div, index) => {
    const gradation = index * 10;

    div.style.height = '10px';
    div.style['backgroundColor'] = `rgb(${gradation}, ${gradation}, ${gradation})`;

    // h1.style.스타일속성명 => 권장
    // h1.style['스타일속성명']
    // h1.style.['스타일-속성명']
  })
})

