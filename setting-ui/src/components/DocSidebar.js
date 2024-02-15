import React from 'react'
import { Sidebar } from "@attrybtech/attryb-ui";
import NavbarListItem from './NavbarListItem';
import icon1 from '../Images/setting-sidebar-logo/Frame1.svg'
import icon2 from '../Images/setting-sidebar-logo/Content.svg'
import './DocSidebar.css';
import logo1 from '../Images/user-square.svg';
import logo2 from '../Images/bank-note-01.svg';
import logo3 from '../Images/globe-06.svg';
import logo4 from '../Images/users-edit.svg';
import logo5 from '../Images/users-plus.svg';
import logo6 from '../Images/user-check-01.svg';
import logo7 from '../Images/layout-grid-01.svg';

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
                    sideBarLogo: icon1,
                }}

                sidebarData={[
                    {
                        _id: "1",

                        title: "Dashboard",

                        route: "#",

                        asset: icon2,
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

                        asset: icon2,
                    },
                    {
                        _id: "88",

                        title: "Audiences",

                        route: "/audience",

                        asset: icon2,
                    },
                    {
                        _id: "4",

                        title: "Pages",

                        route: "#",

                        asset: icon2,
                    },

                    {
                        _id: "5",

                        title: "Campaigns",

                        route: "#",

                        asset: icon2,
                    },

                    {
                        _id: "6",

                        title: "Template Library",

                        route: "#",

                        asset: icon2,
                    },

                    {
                        _id: "7",

                        title: "Brand Kit",

                        route: "#",

                        asset: icon2,
                    },

                    {
                        _id: "8",

                        title: "Analytics",

                        route: "#",

                        asset: icon2,
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



