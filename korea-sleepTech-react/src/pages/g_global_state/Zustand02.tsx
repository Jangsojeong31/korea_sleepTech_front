import { useAuthStore } from '@/stores/auth.store';
import { useUsersStore } from '@/stores/user.store';
import React, { useRef, useState } from 'react'

// ! store 저장소 파일 생성


// 명명규칙) 데이터명.store.ts 파일

// ! 로그인 컴포넌트
const Login = () => {
  const [username, setUsername] = useState('');
  const {login} = useAuthStore();

  return (
    <>
      <input 
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
      />

      <button onClick={() => login(username)}>로그인</button>
    </>
  )
}

function Zustand02() {
  const {users, addUser} = useUsersStore();
  const userIdRef = useRef(1);

  const handleCreate = () => {
    addUser({
      id: userIdRef.current, 
      name: '이승아'
    })

    userIdRef.current += 1;
  }

  const {user, logout} = useAuthStore();
  return (
    <div>
      {users.map(user => (
        <div>
          {user.id} / {user.name}
        </div>
      ))}
      <button onClick={() => handleCreate()}>사용자 추가</button>
      <br />
      <p>Welcome: {user}</p>
      <Login />
      <button onClick={logout}>로그아웃</button>
    </div>
  )
}

export default Zustand02