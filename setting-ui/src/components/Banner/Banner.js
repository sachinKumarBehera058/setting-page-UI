import React from 'react'
import { Navbar } from '@attrybtech/attryb-ui'
import close from '../../Images/close.svg'
import './Banner.css'

const Banner = ({onClick}) => {
    return (
        <Navbar className="Navbar"
            navbarLeftSection={
                <div className="navbar-banner-left">
                    Flash_sale_template
                </div>
            }
            navbarRightSection={
                <div className="navbar-banner-right">
                    <div className='navbar-banner-right-img'>
                        <img src={close} alt="close_btn" onClick={onClick} />
                    </div>
                </div>
            }
        />
    )
}

export default Banner