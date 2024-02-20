import React from 'react';
import './NavbarListItem.css'
const NavbarListItem = ({ logo, title }) => {
    return (
        <div className='navbar-list-item-box-content-info'>
            <div className='navbar-list-item-box-content-info-innerbox'>
                <img className='navbar-list-item-box-content-info-innerbox-img' src={logo} alt="Logo" />
                <div className='navbar-list-item-box-content-info-innerbox-text text-md'>{title}</div>
            </div>
        </div>
    );
};

export default NavbarListItem;
