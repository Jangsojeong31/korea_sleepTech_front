import React, { useState } from "react";

// ! useState를 사용한 다양한 타입 상태 관리
// : 숫자, 문자, 논리, 객체, 배열

interface IUser {
  id: number;
  name: string;
}

function UseState05() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({
    id: 0,
    name: "",
  });
  const [items, setItems] = useState<string[]>([]);

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const addItem = () => {
    const newItems = `Item${items.length}`;
    setItems([...items, newItems]);
  };

  return (
    <div style={{ margin: "20px", padding: "20px", border: "1px solid blue" }}>
      <h5>여러 타입의 상태 관리</h5>
      {/* 숫자형: 카운터 증가 버튼 */}
      <p>Count: {count}</p>
      <button onClick={() => setCount((preCount) => preCount + 1)}>증가</button>

      {/* 문자열: 사용자 이름 입력 필드 */}
      <p>Name: {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* 논리형: 토글 버튼 */}
      <p>Visible? : {isVisible ? "Yes" : "No"}</p>
      <button onClick={() => setIsVisible(!isVisible)}>토글 버튼</button>

      {/* 객체: 사용자 정보 수정 입력 필드 */}
      {/* 객체 구조 자체는 리액트 Node 환경에 출력할 수 없음 
        ex) User: {user}
        1) 객체의 속성 데이터를 출력
        2) 문자열 형식(JSON.stringfy())으로 변환하여 출력
      */}
      <p>
        User: {user.id}, {user.name}
      </p>
      <p>User: {JSON.stringify(user)}</p>

      <input
        type="text"
        name="id"
        value={user.id}
        placeholder="사용자 아이디"
        onChange={handleUserChange}
      />

      {/* 배열: 배열 요소 추가 */}
      <p>Items: {items}</p>
      <button onClick={addItem}>아이템 추가</button>
    </div>
  );
}

export default UseState05;
