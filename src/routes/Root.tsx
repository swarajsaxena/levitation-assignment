import React from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
      <div>root</div> <Outlet />
    </div>
  )
}

export default Root
