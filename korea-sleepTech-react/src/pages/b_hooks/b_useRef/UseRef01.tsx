import React, { useRef, useState } from 'react'

// 기본 구조
// const refContainer = useRef(initialValue);
function UseRef01() {
  const [text, setText] = useState<string>('');

  const lengthRef = useRef(0);
  let lengthData = 0;

  // ? useRef vs 일반 변수
  // 1) useRef: 리렌더링 사이에 값이 유지
  // - 값을 바꿔도 컴포넌트를 리렌더링 하지 않음
  // - 값은 항상 최신값으로 유지 (.current 값을 계속 업데이트)
  // 2) 일반변수
  // : 함수형 컴포넌트는 매번 리렌더링 시 마다 함수 전체가 다시 실행됨
  // - let lengthData는 매번 0으로 초기화

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    lengthRef.current = e.target.value.length;
    lengthData = e.target.value.length;
    console.log(lengthData);
  }
  
  return (
    <div>
      <input type="text" value={text} onChange={handleInputChange} />
      <p>Text 길이(참조): {lengthRef.current} </p>
      <p>Text 길이(변수): {lengthData} </p>
    </div>
  )
}

export default UseRef01