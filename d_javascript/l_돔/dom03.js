/*
1) createElement: 문서 객체 생성
  >> document.creatElement('문서객체명')
2) appendChild: 객체 배치
  >> 부모객체.appendChild(자식객체)
3) removeChild: 객체 제거
  >> 부모객체.removeChild(자식객체)
4) parentNode: 객체의 부모 객체 반환
  >> 문서객체.parentNode
 */


// ! 1. 문서 객체 생성
// : creatElement('문서객체명') 메서드 사용

// cf) 문서 객체는 생성한 뒤 '배치'가 필수
// >> DOM 트리 구조 내부에 삽입

// ? 메서드: 부모객체.appendChild(자식객체) 
// : 자식 요소 리스트의 제일 마지막에 추가됨

document.addEventListener('DOMContentLoaded', () => {
  // 문서 객체 생성
  const header = document.createElement('h1');

  // 생성된 태그 조작
  header.textContent = '문서 객체를 동적으로 생성';
  header.setAttribute('data-custom', '사용자 정의 속성'); // 사용자가 만든 속성
  header.style.color = 'white';
  header.style.backgroundColor = 'black';

  // 배치
  document.body.appendChild(header); // body 내 요소 중 마지막에 배치
})

// ! 문서 객체 이동
// : appendChild() 메서드를 사용하여 문서 객체 이동
// - 문서 객체의 부모는 반드시 하나여야 함
// - 문서 객체를 다른 문서 객체에 추가시 이동 효과 

const divA = document.getElementById('first');
const divB = document.getElementById('second');

const h2 = document.createElement('h2');
h2.textContent = '이동하는 h2 태그';

const toFirst = () => {
  divA.appendChild(h2);
  setTimeout(toSecond, 2000);
}

const toSecond = () => {
  divB.appendChild(h2);
  setTimeout(toFirst, 2000);
}

toFirst();

// ! 2. 문서 객체 제거
// : 부모 객체.removeChild(자식 객체) 메서드 사용
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const h3 = document.querySelector('h3');
    
    // h3 제거
    // document.body.removeChild(h3);

    // cf) 문서객체.parentNode: 해당 문서 객체의 부모 객체를 지정
    
    // ex) a요소.b요소.c요소.removeChild(d요소);
    // d요소.parentNode >> c요소가 반환됨 
    // 만약 중간에 또 다른 요소가 삽입되면 부모-자식 관계에 변화 발생
    // -> removeChild 사용시 문제 발생 가능 
    // -> parentNode 사용

    h3.parentNode.removeChild(h3); 
  },3000)
})
