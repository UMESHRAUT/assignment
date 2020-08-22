import React from 'react'
import { IconButton} from '@material-ui/core';
import { HiMenuAlt2,HiShoppingCart } from 'react-icons/hi';
import './header.css'
function Header() {
    return (
        <div className="Header">
            <IconButton>
            <HiMenuAlt2 className="icon"/>
            </IconButton>
            <span className="invest">Invest</span>
            <HiShoppingCart className="icon"/>
        </div>
    )
}

export default Header
