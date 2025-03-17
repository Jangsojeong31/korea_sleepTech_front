//  & Todo 리스트 만들기(할일 목록 관리 시스템)

// ! Todo 객체 구성
// - id: 각 할 일의 고유 식별자(주로 숫자나 문자열)
// - content: 할 일의 내용을 문자열로 저장
// - completed: 할 일의 완료 상태를 나타내는 boolean 데이터

/*
Todo 객체 예시
let todo = {
  id: 1, 
  content: 할일 내용,
  completed: 완료 여부(true / false)
}
*/

// == 프로젝트 개요 == //
// Todo 객체 데이터에 대한 CRUD 기능
// 1. 할일 추가: 객체를 사용하여 할 일을 저장하고, 배열에 객체를 추가
// 새로운 할일(객체)을 목록(배열)에 추가

// 2. 할일 수정: 완료된 할일의 completed 값을 전환(토글, toggle)

// 3. 할일 삭제: 지정하는 할 일을 목록에서 제거

// 4. 할일 목록 출력: 현재 목록의 상태를 콘솔에 출력

// == 프로젝트 구현 == //
let todos = []; // 배열 리터럴 방식의 선언(빈 배열): 할일 목록 저장할 배열
let nextId = 1; // 고유 ID값을 위한 전역 변수

// 1) 할일 추가 함수: 인자로 내용(content)을 받아 할일 생성
function addTodo(content) {
  // 할일 생성
  const newTodo = {
    id: nextId,
    content: content,
    completed: false
  };
  nextId++;
  // todos 배열에, 생성한 할일 추가
  todos.push(newTodo);
  displayTodos();
}

// 2) 할일 수정 함수(토글): 완료 상태를 변경, id를 인자로 받음
function toggleTodo(id) {
  todos = todos.map(todo => {
    if (todo.id === id){
      // cf) 스프레드 연산자:
      // : 객체나 배열의 내부 요소만을 추출하는 연산자
      // 깊은 복사 시 사용
      return {...todo, completed: !todo.completed};
      // ...todo => todo의 요소만 가져와서 새로운 객체 생성(id, content, completed)
      // , completed: !todo.completed => 기존속성키: 새로운 속성값; >> 속성값 재할당

      // let obj1 = {a: 1, b: 2};
      // obj1.a = 3; => 재할당
      // obj1.c = 5; => 요소 생성
      // >> {a: 3, b: 2, c: 5}
    }
    return todo; // id가 일치하지 않으면 기존의 todo 객체를 그대로 반환
  });
  displayTodos();
}

// 3) 할일 삭제 함수: id가 일치하면 배열에서 삭제(배열의 요소 개수 변화: filter)
// == id가 일치하지 않는 요소들만 필터링해서 새로운 배열 저장 
function deleteTodo(id) {
  todos = todos.filter(todo => todo.id !== id);
  displayTodos();
}

// 4) 할일 출력 함수
function displayTodos() {
  console.log('===현재의 할일 목록===');
  todos.forEach(todo => {
    console.log(`${todo.id}: ${todo.content} - ${todo.completed? '완료됨' : '완료되지 않음'}`);

    // console.log(`${todo.id}: ${todo.content} - ${todo.completed && '^^'}`);
  });
}

// === 프로젝트 실행 === //
addTodo('자바스크립트 복습하기');
addTodo('자바 복습하기');
addTodo('이력서 작성하기');
addTodo('맛있는 점심 먹기');

toggleTodo(3);

deleteTodo(3);

addTodo('자격증 공부하기');


