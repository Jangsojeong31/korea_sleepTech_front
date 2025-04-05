import React from 'react'
import { useLocation } from 'react-router-dom'

function About() {
  const location = useLocation();

  return (
    <div>
      <h3>About 소개 페이지</h3>
      <p>현재 경로: {location.pathname}</p> 
      {/* location.pathname: /router-practice/about */}
    </div>
  )
}

export default About