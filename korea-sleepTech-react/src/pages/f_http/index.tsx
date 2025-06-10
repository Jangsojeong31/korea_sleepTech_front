import axios from 'axios';
import React, { useEffect, useState } from 'react'

// ! === Axios === //
// : JS에서 HTTP 요청을 실행하기 위한 라이브러리
// - Promise 기반의 HTTP 클라이언트, 브라우저와 node.js에서 모두 사용 가능

// & HTTP 통신
// : HyperText Transfer Protocol
// - 웹에서 데이터를 교환하는 주요 체계(규칙)
// - 클라이언트(브라우저)와 서버(백엔드)가 서로 데이터를 주고받는 방식
// >> 요청(Request)과 응답(Reponse)의 형태로 데이터가 교환

// ? 프로토콜: 컴퓨터나 기기 간에 데이터를 교환할 때 지켜야하는 규칙 체계

// & HTTP 통신의 기본 구조
// 1) 요청(Request)
// 요청: 클라이언트가 서버에게 보내는 정보
// 구성
// - URL: 어디에 보낼지(주소)
// - Method: 어떤 동작을 할 건지(GET, POST 등)
// - Headers: 추가 정보들 (예: 인증 토큰)
// - Body: 보낼 데이터 (POST나 PUT 등에서 사용)

// 2) 응답(Response)
// : 서버가 클라이언트에게 돌려주는 정보
// - Status Code: 결과 상태 (예: 200 성공, 404 없음)
// - Headers: 응답 정보 (예: 응답 형식)
// - Body: 실제 데이터 (예: JSON, HTML 등)

// & HTTP 메서드(Method)
// 1) GET: 데이터 가져오기
// 2) POST: 새로운 데이터 생성
// 3) PUT: 기존 데이터 수정
// 4) DELETE: 데이터 삭제

// cf) PATCH: 기존의 데이터에서 '일부 데이터'를 대체

// & Axios 장점
// : 간결한 API를 사용 (HTTP 요청과 응답 처리가 간결하고 직관적임)
// - 자동으로 JSON 데이터 변환을 지원

// & Axios 설치
// : npm install axios

// cf) axios 타입 정의 파일 설치
// : npm install --save-dev @types/axios

// ! axios를 사용한 사용자 데이터 처리
// https://jsonplaceholder.typicode.com/

interface User {
  id: number;
  name: string;
  email: string;
}

function Index() {
  /*
    cf) fetch : JS의 기본 내장 함수
    fetch('http://example.com')
      .then(res => res.json())
      .then(data => console.log(data));

    ? 에러 처리가 복잡,
      요청/응답 헤더 설정이 복잡
  */

  const [users, setUsers] = useState<User[] | null>(null);

  const [newUser, setNewUser] = useState<User>({
    id: 0,
    name: '',
    email: ''
  })

  const [editingUserId, setEditingUserId] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;

    setNewUser({
      ...newUser,
      [name]: value
    })
  };

  // 전송 이벤트 핸들러
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if(editingUserId !== null) {
      // 수정될 사용자의 id 값이 상태관리되고 있다면 
      updateUser(editingUserId, newUser);
    }else{
      createUser(newUser);
    }
  }

  // # axios를 사용한 get 요청 (가져오기)
  const fetchUsers = async () => {
    try {
      // ! axios 메서드 사용 방법
      // - axios.get('url')
      // - axios.post('url', 저장할 데이터)
      // - axios.put('url', 수정할 데이터)
      // - axios.delete('url')

      const response = await axios.get('https://jsonplaceholder.typicode.com/users');

      const data = response.data; // axios 응답 내부의 데이터는 자동으로 객체로 형 변환

      setUsers(data);

    } catch (e) {
      console.log('Error fetching data: ', e);
    }
  }

  // # axios를 사용하는 post 요청 (전송하기)
  const createUser = async (newUser: User) => {
    try{
      // post('URL', 전송할 데이터)
      // : 데이터를 전송하고 난 뒤 해당 데이터를 반환(응답)
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/users',
        newUser
      );

      if(users) {
        setUsers([...users, response.data]);
        console.log(response.data);
      }
    }catch(e){
      console.log('Error creating User: ', e);
    }
  };

  // # axios를 사용하는 put 요청 (수정하기)
  const updateUser = async (id: number, updateUser: User) => {
    try{
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        updateUser
      );

      if(users) {
        setUsers(users.map(user => user.id === id ? response.data : user));
      }

    }catch(e){
      console.log('Error updating user: ', e);
    }
  };

  useEffect (() => {
    fetchUsers();
  }, []);

  const handleEdit = (user: User) => {
    setNewUser(user);
    setEditingUserId(user.id);
  }

  const deleteUser = async (id: number) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users${id}`);
      if(users) {
        setUsers(users.filter(user => user.id !== id))
      }
    } catch (e) {
      console.error('Error deleting user: ', e);
    }
  }

  return (
    <div>
      <h1>리액트 HTTP 통신 라이브러리 (Axios)</h1>
      <h2 style={{
        backgroundColor: 'black',
        color: 'white'
      }}>
        1. Axios Get
      </h2>
      {/* users 데이터가 존재할 경우 UI 출력, 아니면 p 태그 */}
      {/* {users?.map(user => ( // user가 있으면 mapping
        <div>
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      ))} */}

      {users ? (
        users.map((user) => (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <p>{user.email}</p>
            <button onClick={() => handleEdit(user)}>수정</button>
            <button onClick={() => deleteUser(user.id)}>삭제</button>
          </div>
        ))
      ) : (
        <p>데이터를 가져오는 중입니다.</p>
      )}

      <h2 style={{
        backgroundColor: 'black',
        color: 'white'
      }}>
        2. Axios Post
      </h2>

      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder='name'
          name='name'
          value={newUser.name}
          onChange={handleInputChange}
        />
        <input 
          type="text"
          placeholder='email'
          name='email'
          value={newUser.email}
          onChange={handleInputChange}
        />
        <button>{editingUserId ? '사용자 수정' : '사용자 추가'}</button>
      </form>
    </div>
    
  )
}

export default Index