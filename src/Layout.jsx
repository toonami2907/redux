import React from 'react'
import {Toaster} from 'react-hot-toast'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className='bg-gray-50'>
        <Toaster/>
        <Outlet/>
    </div>
  )
}
