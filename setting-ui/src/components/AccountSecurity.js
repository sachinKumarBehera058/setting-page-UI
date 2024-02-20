import React from 'react'
import UpdateDetails from './UpdateDetails'
import './AccountSecurity.css'
import UpdateEmailSection from './UpdateEmailSection'
import UpdatePasswordSection from './UpdatePasswordSection'

const AccountSecurity = () => {
    const UpdateInfo = [
        { text: 'Email', subtext: "Johndoe123@shopify.com", head:"Your current email is Johndoe123@shopify.com" ,btn: "Change Email" , compo:<UpdateEmailSection/> },
        { text: 'Password', subtext: "Set a permanent password to login to your account",head:"Use at least 15 letters or 8 characters with both letters and numbers", btn: "Change Password", compo:<UpdatePasswordSection/>},
    ];
    return (
        <div className='profile-section-input'>
            <div className="profile-section-input-box">
                <div className="profile-section-div-heading">
                    <div className='profile-section-div-heading-text text-lg--sb'>Account Security</div>
                    <div className="divider-line"></div>
                </div>
                <div className="update-details">
                    <div className="update-details-container">
                        {UpdateInfo.map((item, index) => (
                            <UpdateDetails key={index} text={item.text} subtext={item.subtext} head={item.head} btn={item.btn} compo={item.compo} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountSecurity