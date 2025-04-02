import React, { useState } from 'react'
import ChildComponent from './ChildComponent';

// ! === 컴포넌트 트리 안에서의 상태 ===
// : 상태를 컴포넌트 트리 아래로 전달 (부모 >> 자식)

// cf) 상태(state) vs 속성(Props)
// 1) 상태
// - 컴포넌트 '내부'

// 2) 속성

// 리액트에서 컴포넌트는 '상태'와 '속성'을 사용하여 데이터와 UI를 관리

export type UserType = {
  username: string;
  height: number;
}

const initialValue: UserType = {
  username: '이도경',
  height: 156
}

function UseState06() {
  const [userInfo, setUserInfo] = useState<UserType>(initialValue);
  const [submittedData, setSubmittedData] = useState<UserType | undefined>();
  const {username, height} = userInfo; // 구조분해할당

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    })
  }
  const handleUserInfoSubmit = () => {
    setSubmittedData(userInfo);
  }
  return (
    <div>
      <input type="text" placeholder='이름' name='username' value={username} onChange={handleInputChange} />
      <input type="text" placeholder='이름' name='height' value={height} onChange={handleInputChange} />
      <button onClick={handleUserInfoSubmit}>전송</button>
      <ChildComponent userData={submittedData}/>
    </div>
  )
}

export default UseState06