// 모듈 기능 정의
// : 재사용될 클래스 정의

// 1) 속성
// : 할일 목록 (todos 배열)

// 2) 메서드
// - 새로운 할일 추가(생성)
// - 특정 할일 항목의 완료 상태 토글(수정)
// - 특정 할 일 항목을 제거
// - 저장된 모든 할일 목록을 반환((전체) 조회)

// +) 할일 객체 정의
// id: 각 할일의 고유값
// text: 할일 내용
// completed: 할일 완료 여부(boolean값 - 기본값: false)

// 이름 붙여서 내보내기
export class TodoManager {
  // TodoManager 생성자
  constructor() {
    this.todos = [];
  }

  // 메서드
  // 1) 새로운 할일 추가
  addTodo(text) {
    const newTodo = {
      id: Date.now(), // 현재 날짜와 시간
      text,
      completed: false
    };
    this.todos.push(newTodo);
  }

  // 2) 특정 할일 항목의 완료 상태 토글
  toggleCompleted(id) {
    const todo = this.todos.find(todo => todo.id === id);

    if(todo) {
      todo.completed = !todo.completed;
    }
  }

  // 3) 특정 할 일 항목을 제거
  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  // 4) 모든 할일 항목 반환
  getTodos() {
    return this.todos;
  }

}
