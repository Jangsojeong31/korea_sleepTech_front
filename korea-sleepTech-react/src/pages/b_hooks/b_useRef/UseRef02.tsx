import React, { useRef, useState } from 'react'


function UseRef02() {
  const [count, setCount] = useState<number>(0);
  const prevCountRef = useRef<number>(0);

  const inputRef = useRef<HTMLInputElement>(null);

  const increment = () => {
    setCount(prevCount => {
      prevCountRef.current = prevCount;
      return prevCount + 1;
    })
  }
  return (
    <div>
      <p>현재 카운트: {count}</p>
      <p>이전 카운트: {prevCountRef.current}</p>
      <button onClick={increment}>증가</button>
    </div>
  )
}

export default UseRef02