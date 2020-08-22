import React from 'react'
import { FaHome } from 'react-icons/fa';
import { HiCurrencyRupee } from 'react-icons/hi';
import { IconButton} from '@material-ui/core';
import { MdBusinessCenter } from 'react-icons/md';
import { GoPerson } from 'react-icons/go';
import './footer.css'
function Footer() {
    return (
        <div className="Footer">
            <IconButton>
            <div className="menu">
            <FaHome className="icon"/>
            Home
            </div>
            </IconButton>
            <IconButton>
            <div className="menu">
            <HiCurrencyRupee className="icon"/>
            Invest
            </div>
            </IconButton>
            <IconButton>
            <div className="menu">
            <MdBusinessCenter className="icon"/>
            Portfolio
            </div>
            </IconButton>
            <IconButton>
            <div className="menu">
            <GoPerson className="icon"/>
            Profile
            </div>
            </IconButton>
        </div>
    )
}

export default Footer
