import React from 'react';
import './SidebarListItem.css'
const SidebarListItem = ({ icon, title }) => {
    return (
        <div className='sidebar-list-item-box-content-info'>
            <div className='sidebar-list-item-box-content-info-innerbox'>
                <img className='sidebar-list-item-box-content-info-innerbox-img' src={icon} alt="icon" />
                <div className='sidebar-list-item-box-content-info-innerbox-text text-md'>{title}</div>
            </div>
        </div>
    );
};

export default SidebarListItem;
