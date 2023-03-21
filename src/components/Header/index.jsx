import React from 'react'
import DropdownMenu from '../DropdownMenu'
import "./index.scss"

export default function Header() {
    return (
        <div className='Header'>
            <div className='Header__title'>Header</div>
            <DropdownMenu />
        </div>
    )
}
