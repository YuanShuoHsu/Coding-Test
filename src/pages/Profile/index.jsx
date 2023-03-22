import React from 'react'
import "./index.scss"

import Header from '../../components/Header'

import { useTranslation } from 'react-i18next';

export default function Profile() {

    const { t } = useTranslation()

    return (
        <div className='profile'>
            <Header />
            <div className='profile__main'>
                <p className='main__text'>
                    <span className='main__text--primary'>{`${t("Wel")}`}</span>
                    <span className='main__text--secondary'>{`${t("come")}`}</span>
                </p>
                <p className='main__text'>cccc</p>
            </div>
        </div>
    )
}
