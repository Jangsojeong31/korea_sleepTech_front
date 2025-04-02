import React, { useState } from "react";

// Todo 관리 시스템
/*
1. 할 일 내용
2. 할 일 완료 상태
3. 시간 기록
*/

interface ITodo {
  description: string;
  completed: boolean;
  timestamp: Date;
}

function Practice() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [task, setTask] = useState<string>('');

  const addTodo = () => {
    if(task.trim() !== '') {
      const newTodo: ITodo = {
        description: task,
        completed: false,
        timestamp: new Date()
      }
      // 전체 할 일 배열 요소를 가져와 추가 할 일을 마지막 요소로 추가
      // : 배열의 불변성 방지를 위해 새로운 배열에 요소를 깊은 복사
      setTodos([...todos, newTodo]);

      setTask(''); // 입력 필드 초기화
    }

  }

  const toggleTodo = (index: number) => {
    const newTodo = todos.map((todo, idx) => 
      idx === index ? 
      {...todo, completed: !todo.completed } : 
      todo);

      setTodos(newTodo); // 새로운 배열 주소를 전달 >> 상태 변경 감지
  }
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        width: "400px",
        margin: "20px auto",
        padding: "10px",
        border: "1px solid black",
        borderRadius: "5px",
      }}
    >
      <h3>할일 목록 앱</h3>
      <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder='할일을 입력하세요' />
      <button onClick={addTodo}>할일 추가</button>

      <hr />
      <ul>
        {todos.map((todo, index) => (
          // 반환을 HTML 요소로: 소괄호 사용
          <li key={index}>
            {todo.description}
            (작성 시간: {todo.timestamp.toLocaleTimeString()})
            <button onClick={() => toggleTodo(index)}>
              {todo.completed? '완료 취소' : '할일 완료'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Practice;
