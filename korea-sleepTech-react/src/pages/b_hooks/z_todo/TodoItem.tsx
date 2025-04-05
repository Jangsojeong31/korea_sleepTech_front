import React from 'react'
import { Todo } from './TodoAppLocalStorage'

// ! 하나의 할일
// : 할일 하나를 보여주고 클릭 시 완료 토글, 삭제 버튼 등을 구현

interface TodoItemProps {
  todo: Todo
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

function TodoItem({todo, toggleTodo, deleteTodo}: TodoItemProps) {

  return (
    <li>
      <span
        style={{textDecoration: todo.compeleted ? 'line-through' : 'none'
        }}
        onClick={() => toggleTodo(todo.id)}
        >{todo.text}</span>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  )
}

export default TodoItem