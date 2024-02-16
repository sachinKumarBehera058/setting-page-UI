import React from 'react'
import { Sidebar } from "@attrybtech/attryb-ui";
import NavbarListItem from './NavbarListItem';

import icon from '../Images/setting-sidebar-logo/main-logo.svg'
import icon1 from '../Images/setting-sidebar-logo/icon1.svg'
import icon2 from '../Images/setting-sidebar-logo/icon2.svg'
import icon3 from '../Images/setting-sidebar-logo/icon3.svg'
import icon4 from '../Images/setting-sidebar-logo/icon4.svg'
import icon5 from '../Images/setting-sidebar-logo/icon5.svg'
import icon6 from '../Images/setting-sidebar-logo/icon6.svg'
import icon7 from '../Images/setting-sidebar-logo/icon7.svg'
import icon8 from '../Images/setting-sidebar-logo/icon8.svg'
import logo1 from '../Images/Navigation-Item-img/user-square.svg';
import logo2 from '../Images/Navigation-Item-img/bank-note-01.svg';
import logo3 from '../Images/Navigation-Item-img/globe-06.svg';
import logo4 from '../Images/Navigation-Item-img/users-edit.svg';
import logo5 from '../Images/Navigation-Item-img/users-plus.svg';
import logo6 from '../Images/Navigation-Item-img/user-check-01.svg';
import logo7 from '../Images/Navigation-Item-img/layout-grid-01.svg';

import './DocSidebar.css';

const DocSidebar = () => {
    const handleSupportCallback = () => {
        window.open('https://attryb.com', '_blank');
    }

    const navbarItems = [
        { logo: logo1, title: 'Personal Info' },
        { logo: logo2, title: 'Billings and Payment' },
        { logo: logo3, title: 'Domains' },
        { logo: logo4, title: 'User Management' },
        { logo: logo5, title: 'Invite and Referrals' },
        { logo: logo6, title: 'Customer Experience' },
        { logo: logo7, title: 'Page Structure' },
    ];
    return (
        <div className='DocSidebar'>
            <Sidebar
                sideBarHeaderData={{
                    sideBarHeaderTitle: "Web Personalization",
                    sideBarLogo: icon,
                }}

                sidebarData={[
                    {
                        _id: "1",

                        title: "Dashboard",

                        route: "#",

                        asset: icon1,
                    },

                    {
                        _id: "2",

                        title: "Use Cases",

                        route: "/use-cases",

                        asset: icon2,
                    },
                    {
                        _id: "3",

                        title: "Segments",

                        route: "/segments",

                        asset: icon3,
                    },
                    {
                        _id: "4",

                        title: "Pages",

                        route: "#",

                        asset: icon4,
                    },

                    {
                        _id: "5",

                        title: "Campaigns",

                        route: "#",

                        asset: icon5,
                    },

                    {
                        _id: "6",

                        title: "Template Library",

                        route: "#",

                        asset: icon6,
                    },

                    {
                        _id: "7",

                        title: "Brand Kit",

                        route: "#",

                        asset: icon7,
                    },

                    {
                        _id: "8",

                        title: "Analytics",

                        route: "#",

                        asset: icon8,
                    },
                ]}
                handleItemOnClick={() => { }}
                supportCallback={handleSupportCallback}
            />
            <div className='Navbar-list-item'>
                <div className='navbar-list-item-box'>
                    <div className='navbar-list-item-box-heading'>
                        <h1>Settings</h1>
                    </div>
                    <div className='navbar-list-item-box-content'>
                        {navbarItems.map((item, index) => (
                            <NavbarListItem key={index} logo={item.logo} title={item.title} />
                        ))}
                    </div>
                </div>
            </div>

            {/* <NavbarListItem  logo={logo1} title={'Personal Info'} /> */}
        </div>
    )
}

export default DocSidebar;



