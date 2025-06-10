import React from 'react'
import { useLocation } from 'react-router-dom'

function A() {
  // ! useLocation()
  // : 사용자가 현재 URL 경로에 대한 정보를 제공하는 훅
  // - useNavigate에서 데이터를 전달
  const location = useLocation();
  const {userId} = location.state || {}; // location.state가 있으면(true) 해당 값 반환, 없으면 빈 객체 반환

  return (
    <div style={{
      width: '200px',
      height: '200px'
    }}>
      User Id: {userId}
    </div>
  )
}

export default A
