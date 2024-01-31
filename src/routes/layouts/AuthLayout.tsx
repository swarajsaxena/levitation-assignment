import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
    <div className='flex h-full'>
      <div className='hidden lg:flex flex-1 h-full bg-primary text-primary-foreground p-4 lg:p-8 flex-col justify-between'>
        <div>
          <div className='text-sm'>Levitation</div>
          <div className='font-bold'>MERN Stack Invoice Generator</div>
        </div>
        <div className='text-sm'>
          The Invoice Generator is a full-stack web application built using the
          MERN (MongoDB, Express.js, React, Node.js) stack. It serves as a
          user-friendly tool for creating and managing invoices. The application
          seamlessly integrates user authentication, product management, and PDF
          generation functionalities to streamline the invoicing process.
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default AuthLayout
