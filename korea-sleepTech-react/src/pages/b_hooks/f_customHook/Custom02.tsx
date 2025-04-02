import React from 'react'
import { useInput } from './useInput';

function Custom02() {
  // 커스텀 훅을 사용한 input 창 상태 관리
  const example1 = useInput('');

  // 구조분해할당 사용
  const {
    value: name,
    handleReset: nameReset,
    bind: nameBind }
    = useInput('');
  
  return (
    <div>
      <p>{name}</p>
      <input type="text" name='username' placeholder='사용자 이름' {...nameBind} />
      <button onClick={nameReset}>이름 초기화</button>
    </div>
  )
}

export default Custom02