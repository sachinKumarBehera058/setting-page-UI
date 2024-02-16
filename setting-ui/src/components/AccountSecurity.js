import React from 'react'
import UpdateDetails from './UpdateDetails'
import './AccountSecurity.css'


const AccountSecurity = () => {
    const UpdateInfo = [
        { text: 'Email', subtext: "Johndoe123@shopify.com", btn: "Change Email" },
        { text: 'Password', subtext: "Set a permanent password to login to your account", btn: "Change Password" },
    ];
    return (
        <div className='frame-1619'>
            <div className="frame-1617">
                <div className="frame-1621">
                    <div className='frame-1621-text'>Account Security</div>
                    <div className="divider"></div>
                </div>
                <div className="frame-1615">
                    <div className="frame-1616">
                        {UpdateInfo.map((item, index) => (
                            <UpdateDetails key={index} text={item.text} subtext={item.subtext} btn={item.btn} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountSecurity