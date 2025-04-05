import React from 'react'
import { Todo } from './TodoAppLocalStorage'
import TodoItem from './TodoItem';

// & 목록 반복 렌더링 컴포넌트
// : props.todo를 받아 반복 렌더링
// : TodoItem을 각 항목으로 생성

// props 타입 정의
interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoList({todos, toggleTodo, deleteTodo}: TodoListProps) {

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}  
          />
        ))}
      </ul>
    </div>
  )
}

export default TodoList