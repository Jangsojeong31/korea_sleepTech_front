import React, { useState } from "react";

// ! useState: '컴포넌트 내에서' 데이터에 대한 상태 관리
// - UI에서 발생하는 이벤트에 반응하여 상태 변화

// ? 데이터 타입 정의
interface ILogin {
  id: string;
  password: string;
}

const loginInitialValue = {
  // 로그인 초기값
  id: "",
  password: "",
};

// & 컴포넌트
function UseState02() {
  // & useState 훅 정의
  // 1)
  const [inputValue, setInputValue] = useState<string>("");
  // 2)
  // const [id, setId] = useState<string>('');
  // const [password, setPassword] = useState<string>('');
  // 위와 같이 훅을 정의 하면 id, password를 따로 핸들러 정의해야함
  const [login, setLogin] = useState<ILogin>(loginInitialValue);

  // & 이벤트 핸들러 정의
  // 1) input 핸들러
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    // input 창에 change가 일어나면 처리할 로직 함수
    let inputValue = e.target.value;
    setInputValue(inputValue);
    // 또는 setInputValue(e.target.value);
  };

  const handleResetClick = () => {
    setInputValue("");
  };

  // 2) 로그인 핸들러
  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // 매개변수로 전달받는 e(이벤트 객체)의 target >> 요소
    // : target 요소 내의 속성에 접근 가능
    const { name, value } = e.target; // e.target에서 name, value 속성을 추출
    // name: 지정 시 상태 변수와 이름을 일치
    // value: 사용자로부터 입력받는 값

    setLogin({
      ...login, // id와 password 속성을 모두 가지는 login 객체
      [name]: value, // name 필드 값을 value 로 업데이트
    });
  };

  const handleResetLogin = () => {
    setLogin(loginInitialValue);
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("폼 데이터가 제출되었습니다.", login);

    setLogin(loginInitialValue); // 데이터 활용 후에는 초기화
  };

  return (
    <div>
      <p style={{ color: "lightcoral" }}>useState & 이벤트 핸들러</p>

      {/* 1) */}
      <input
        type="text"
        value={inputValue} // 내용값
        // onChange 이벤트
        // : 사용자가 요소에 변화를 일으킬 때마다 발생하는 이벤트
        // - input, select, textarea 등의 요소에 적용
        onChange={handleInputChange}
        // {/* e: React.ChangeEvent<HTMLInputElement> */}
      />

      <select onChange={handleInputChange}>
        {/* e: React.ChangeEvent<HTMLSelectElement> */}
        <option value="lotte">lotte</option>
        <option value="kia">kia</option>
      </select>

      <button onClick={handleResetClick}>초기화 버튼</button>
      <p>Input Value: {inputValue}</p>

      {/* 2) */}
      <h5>여러 개의 입력 상태 관리</h5>
      <form onSubmit={handleLoginSubmit}>
        <input
          type="text"
          name="id"
          placeholder="아이디"
          value={login.id}
          onChange={handleLoginChange}
        />
        <input
          type="text"
          name="password"
          placeholder="비밀번호"
          value={login.password}
          onChange={handleLoginChange}
        />
        <p>
          아이디: {login.id} / 비밀번호: {login.password}
        </p>
        <button type="button" onClick={handleResetLogin}>
          초기화
        </button>
        <button type="submit">전송</button>
      </form>
    </div>
  );
}

export default UseState02;
