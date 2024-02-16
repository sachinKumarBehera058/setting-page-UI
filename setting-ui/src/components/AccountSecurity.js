import React from 'react'
import UpdateDetails from './UpdateDetails'
import './AccountSecurity.css'


const AccountSecurity = () => {
    const UpdateInfo = [
        { text: 'Email', subtext: "Johndoe123@shopify.com", head:"Your email is Johndoe123@shopify.com " ,btn: "Change Email" },
        { text: 'Password', subtext: "Set a permanent password to login to your account",head:"Use at least 15 letters or 8 characters with both letters and numbers", btn: "Change Password" },
    ];
    return (
        <div className='Profile-section-input'>
            <div className="Profile-section-input-box">
                <div className="Profile-section-div-heading">
                    <div className='Profile-section-div-heading-text'>Account Security</div>
                    <div className="divider-line"></div>
                </div>
                <div className="update-details">
                    <div className="update-details-container">
                        {UpdateInfo.map((item, index) => (
                            <UpdateDetails key={index} text={item.text} subtext={item.subtext} head={item.head} btn={item.btn} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountSecurity