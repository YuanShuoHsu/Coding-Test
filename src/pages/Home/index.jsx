import React, { useEffect } from 'react'
import "./index.scss"

import Header from '../../components/Header'
import Login from '../../components/Login'

import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"

export default function Home() {

  const login = useSelector(state => state.login.value);
  const navigation = useNavigate()

  useEffect(() => {
    if (login) {
      navigation("/profile")
    }
  }, [login, navigation])

  return (
    <div className='Home'>
      <Header />
      <div className='main'>
        <Login />
      </div>
    </div>
  )
}
