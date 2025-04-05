import React, { useEffect, useRef, useState } from "react";
import TodoList from "./TodoList";

// & 최상위 컴포넌트
// : 로컬 스토리지에서 데이터를 불러오고
//    상태 관리
//    할 일을 추가/삭제/토글하는 핵심 로직 구현

export interface Todo {
  id: number;
  text: string;
  compeleted: boolean;
}

// ! 로컬 스토리지의 데이터를 불러오는 함수(이미 저장된 데이터)
const loadTodosFromLocalStorage = (): Todo[] => {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : [];
};

function TodoAppLocalStorage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const nextId = useRef<number>(
    todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1
  );

  // 할 일 추가 함수
  const addTodo = () => {
    if (inputValue.trim() === "") return "";

    const newTodo = {
      id: nextId.current,
      text: inputValue.trim(),
      compeleted: false,
    };

    setTodos([...todos, newTodo]);

    nextId.current += 1;
    setInputValue("");
  };

  // 할일 완료 함수(토글)
  const toggleTodoCompleted = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, compeleted: !todo.compeleted } : todo
      )
    );
  };

  // 할일 삭제
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // ! todos 배열이 변경될 때만 로컬 스토리지에 새로운 데이터를 저장
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // setItem(key, value)
  }, [todos]);

  return (
    <div className="app">
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={(e) => (e.key === "Enter" ? addTodo() : null)}
      />
      <button onClick={addTodo}>Add Todo</button>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodoCompleted}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default TodoAppLocalStorage;
