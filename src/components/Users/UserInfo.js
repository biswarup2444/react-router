import React from 'react'
import { Outlet } from 'react-router-dom';

function UserInfo() {
  return (
    <>
        <h1>UserInfo</h1>
        <Outlet/>
    </>
  )
}

export default UserInfo