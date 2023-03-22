import React from 'react'
import "./index.scss"

import Header from '../../components/Header'
import Login from '../../components/Login'

export default function Home() {
  return (
    <div className='Home'>
      <Header />
      <div className='main'>
        <Login />
      </div>
    </div>
  )
}
