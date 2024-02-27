import React from 'react';
import './SidebarListItem.css'
const SidebarListItem = ({ icon, title }) => {
    return (
        <div className='sidebar-list-item-box-content-info'>
            <div className='sidebar-list-item-box-content-info-innerbox'>
                <div className='sidebar-list-item-box-content-info-innerbox-icon'>
                   <img src={icon} alt="icon" />
                </div>
                <div className='sidebar-list-item-box-content-info-innerbox-text text-md'>{title}</div>
            </div>
        </div>
    );
};

export default SidebarListItem;
