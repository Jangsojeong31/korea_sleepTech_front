import React, { useState } from 'react'

/*
  ! Hooks(갈고리)
  : 리액트 '함수형 컴포넌트'에서 사용할 수 있는 기능
  : use ~ 키워드
    '여기서 해당 기능을 사용한다.'라는 의미   
    ex) useState: 상태(state)기능을 여기서 사용한다.
  
  ! === useState === ***
  : React에서 제공하는 Hooks 중 하나
  : '함수형 컴포넌트' 내에서 상태를 관리하는 기능
    >> 컴포넌트 단위에서의 상태 관리 

  : useState 훅 호출 시
    >> 변화되는 상태값과 해당 상태값을 업데이트하는 함수를 제공
    >> 상태 업데이트 함수는 '비동기적'처리가 기본으로 진행
    >> 상태 변경 시 '컴포넌트 재렌더링' 유발

  ? hooks의 작성 위치
  권장) 같은 기능을 가진 hooks들끼리 묶어서 컴포넌트 최상단에 작성
  필수) 반드시 컴포넌트의 최상단에서 호출: 조건문, 반복문, 함수 내부 등에서 실행될 수 없다.
*/

function UseState01() {
  // ! useState의 기본 구조
  // const [state, setState] = useState<type>(initialValue);

  // 1) state: 현재의 상태값 (변수)
  // 2) setState: 상태를 업데이트하는 함수 (함수)
  //    >> 관례상 'set + 현재 상태값 변수명' 으로 명명
  // 3) initialValue: 상태의 초기값 (선택)
  // 4) <type>: 상태값의 타입 (선택- 미지정 시 상태값의 타입이 자동 지정)

  // ? cf) hooks는 React 내부의 함수: import 해서 사용해야 한다.

  // ? useState는 배열을 반환 (상태변수, 상태변경함수)
  //  : 좌항에서 구조분해할당으로 변수와 함수를 각각 할당
  const [count, setCount] = useState<number>(0);

  const handleUpClick = () => {
    // ? 1) 상태 설정 함수를 그대로 사용
    // : 이전의 상태를 직접 참조
    // - 주로 현재(이전)의 값과 관련이 없는 변화가 이루어질 경우 사용
    // setCount(count + 1); // -> 0 + 1
    // setCount(count + 1); // -> 0 + 1
    // 해당 이벤트 핸들러 실행 시 컴포넌트 전체의 상태(count)에 대한 증가만 이루어짐
    // 바로 직전의 상태 변화를 감지 하지 못함

    // ? 2) 함수형 업데이트를 사용
    // : 이전(최신)의 상태값을 기반으로 상태를 업데이트 하는 경우
    // cf) set- 상태 변경 함수 내에서 콜백함수
    //      : 해당 콜백함수의 인자는 최신의 상태값 (매개변수명: prev- 상태명)
    // ex) prevCount 
    setCount(prevCount => prevCount + 1); // 0 + 1
    setCount(prevCount => prevCount + 1); // 1 + 1
  }
  
  const handleDownClick = () => {
    // setCount(count - 1);
    // setCount(count - 1);
    setCount(prevCount => prevCount - 1); // 0 - 1
    setCount(prevCount => prevCount - 1); // 1 - 1
  }

  const [message, setMessage] = useState<string>('안녕하세요');

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleUpClick}>카운트 +2 증가</button>
      <button onClick={handleDownClick}>카운트 -2 감소</button>

      <p>{message}</p>
    </div>
  )
}

export default UseState01