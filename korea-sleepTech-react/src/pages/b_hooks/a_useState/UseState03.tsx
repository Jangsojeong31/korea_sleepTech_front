import React, { useState } from "react";

// ! 리액트 이벤트 타입 정의

// == 이벤트 타입 ==
// : 이벤트 종류에 따라 타입 정의가 다름
// ex) 입력 필드에 대한 변경 이벤트: React.ChangeEvent
//     클릭에 대한 이벤트: React.ClickEvent
//     폼 제출에 대한 이벤트: React.FormEvent
//      >> 폼 제출 기본 동작 방지: e.preventDefault();
//     키보드 이벤트: React.KeyboardEvent
//     마우스 이벤트: React.MouseEvent

function UseState03() {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>('');
  const [enter, setEnter] = useState<string>('');

  // 이벤트 핸들러
  const onIncrementButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount((preCount) => preCount + 1);
    console.log(e.target); // <button>증가</button>
  };

  const onNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    console.log(e.target);
  }

  const onEnterKeyboard = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(e.key);

    if(e.key === 'Enter'){
      console.log('Enter 키가 눌러졌습니다.');
    }
  }

  const onEnterInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnter(e.target.value);
  }



  return (
    <div>
      <h5>이벤트 객체의 여러 타입</h5>

      <p>현재 카운트: {count}</p>
      <button onClick={onIncrementButton}>증가</button>

      <input
        type="text"
        onChange={onNameInput}
        placeholder="이름을 입력"
        value={name}
        />

      <input
        type="text"
        onKeyDown={onEnterKeyboard}
        onChange={onEnterInput}
        placeholder="Enter키를 눌러주세요."
        value={enter}
        
      />
    </div>
  );
}

export default UseState03;
