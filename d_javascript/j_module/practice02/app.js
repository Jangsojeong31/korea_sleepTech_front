// 이름 붙여 가져오기
import { TodoManager } from "./TodoManager.js";
// cf) import문은 파일의 최상단에 작성 권장

// 프로젝트 기능 정의
// - TodoManager 모듈의 기능을 사용하여 할 일 앱을 구현
// - 이벤트 등록, 할일 목록 수정 등 로직을 담당

// ? TodoManager의 인스턴스 생성
const todoManager = new TodoManager();

// ? HTML 요소 가져오기
const form = document.querySelector('#new-todo-form');
const input = document.querySelector('#new-todo');
const todoList = document.querySelector('#todo-list');

form.addEventListener('submit', (e) => {
  // form 내부에서 submit 이벤트 발생 시 
  e.preventDefault(); // 기본 제출 이벤트를 방지

  const text = input.value.trim();
  if(text !== '') {
    todoManager.addTodo(text);
    input.value = ''; // 내용 비워주기
    updateTodoList();
  }
});

// 할일 목록 업데이트 함수
function updateTodoList() {
  // 모든 할일 목록 가져오기
  const todos = todoManager.getTodos();

  // ul 태그 내부의 데이터 삭제
  // cf) HTML.innerHTML: 요소 내부의 전체 HTML 코드를 문자열로 반환
  todoList.innerHTML = ''; 

  todos.forEach(todo => {
    // 태그에 사용될 텍스트 전달 
    const li = document.querySelector(li);
    li.textContent = todo.text;

    // 순회되는 요소의 완료 여부가 true 일 경우 => 디자인 변경
    if(todo.completed) {
      li.classList.add('completed');

    }else{
      li.classList.remove('completed');
    }

    li.addEventListener('click', () => {
      todoManager.toggleCompleted(todo.id);
      updateTodoList(); // 완료 여부값 변화에 따른 전체 리스트 업데이트
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-button');

    // 삭제 버튼 클릭 시 해당 할일 항목 제거
    deleteButton.addEventListener('click', () => {
      todoManager.removeTodo(todo.id);
      updateTodoList();
    });

    // ul > li> button
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}

updateTodoList();