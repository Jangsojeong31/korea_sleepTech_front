import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

/*
! 리액트 함수형 컴포넌트
  : 'use- + 기능명' 형태로 사용되는 함수 형태의 기능

  ? useState: 상태 관리 (숫자 증가, 입력값 관리 등)
  ? useEffect: 부수 효과 실행 (이벤트 처리, 외부 API 연동 등)
  ? useRef: 렌더링과 상관없이 변화되는 값 추적 (직접적인 DOM 요소 조작)
  ? useCallback: 함수를 메모이제이션 (자식 컴포넌트의 props로 전달할 때 리렌더링 방지)
  ? useMemo: 복잡한 연산 결과를 메모이제이션

  ? React.memo: 전체 컴포넌트를 메모이제이션 (props가 바뀌지 않으면 컴포넌트 리렌더링 x)

*/

const SquareDisplay = React.memo(({number}: {number: number}) => {
  console.log('SquareDisplay 렌더링됨');
  return <p>입력값의 제곱: {number * number}</p>
});

function A_Hook() {
  // 1. useState 
  const [count, setCount] = useState<number>(0);
  const [input, setInput] = useState<string>('');

  // 2. useRef (객체 반환)
  const clickRef = useRef<number>(0);

  // 3. useCallback
  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
    clickRef.current += 1;
    console.log(`버튼 클릭 횟수: ${clickRef.current}`);
  }, []); // 처음 마운트될때의 주소값을 메모이제이션

  // 4. useMemo
  const squaredValue = useMemo(() => {
    console.log('제곱 계산 수행');
    return Number(input);
  }, [input]);

  // 5. useEffect
  useEffect(() => {
    console.log('컴포넌트가 처음 마운트됨');
  }, [])
  
  return (
    <div style={{padding: 20}}>
      <h3>React Hook 통합 예제</h3>
      <p>현재 숫자: {count}</p>
      <button onClick={handleClick}>+1 증가</button>
      <br />
      <input type="text" value={input} onChange={e => setInput(e.target.value)} placeholder='숫자 입력'/>
      <SquareDisplay number={squaredValue}/>
    </div>
  )
}

export default A_Hook