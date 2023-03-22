import React from 'react'
import "./index.scss"

import Header from '../../components/Header'

import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux';
import { loginStatus } from '../../store/slice/login';

export default function Profile() {

    const { t } = useTranslation()

    const navigation = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(loginStatus(false))
        navigation("/")
    }

    return (
        <div className='profile'>
            <Header />
            <div className='profile__main'>
                <p className='main__text'>
                    <span className='main__text--primary'>{`${t("Wel")}`}</span>
                    <span className='main__text--secondary'>{`${t("come")}`}</span>
                </p>
                <p className='main__text'>{localStorage.getItem("account")}</p>
                <button onClick={handleLogout} className='main__button'>登出</button>
            </div>
        </div>
    )
}
