import React from 'react'
import DropdownMenu from '../DropdownMenu'
import "./index.scss"

import { Link } from "react-router-dom"

import technine from "./../../images/technine.png"

export default function Header() {
    return (
        <div className='Header'>
            <div className='Header__container'>
                <Link to={"https://technine.io/zh_hant/"}>
                    <img className='logo' src={technine} alt="technine" />
                </Link>
            </div>
            <DropdownMenu />
        </div>
    )
}
