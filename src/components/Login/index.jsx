import React from 'react'
import "./index.scss"

export default function Login() {
    return (
        <div className='Login'>
            <div className='login__container'>
                <div className='login__item'>
                    <h2 className='item__label'>帳號：</h2>
                    <input className='item__input' type="text" />
                </div>
                <div className='login__item'>
                    <h2 className='item__label'>密碼：</h2>
                    <input className='item__input' type="text" />
                </div>
                <button className='login__button'>登入</button>
            </div>
        </div>
    )
}
