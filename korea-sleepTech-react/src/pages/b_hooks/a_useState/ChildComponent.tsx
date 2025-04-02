import React from 'react'
import { UserType } from './UseState06'

type ChildProps = {
  userData: UserType | undefined;
}
function ChildComponent({ userData }: ChildProps) {
  return (
    <div>
      {userData && (
        <>
        <p>사용자 이름: {userData.username}</p>
        <p>사용자 이름: {userData.username}</p>
        </>
      )}
    </div>
  )
}

export default ChildComponent