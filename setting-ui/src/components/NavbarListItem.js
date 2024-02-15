import React from 'react';
import './NavbarListItem.css'
const NavbarListItem = ({ logo, title }) => {
    return (
        <div className='navbar-list-item-box-content-info'>
            <div className='navbar-list-item-box-content-info-innerbox'>
                <img src={logo} alt="Logo" />
                <div>{title}</div>
            </div>
        </div>
    );
};

export default NavbarListItem;
