import React from 'react'
import "./Profile.css"
import ProfileLogo from './ProfileLogo'
import AccountSecurity from './AccountSecurity'

const Profile = () => {
    return (
        <div className='Profile-section'>
            <div className="Profile-section-div">
                <div className="Profile-section-div-heading">
                    <div className='Profile-section-div-heading-text'>My Profile</div>
                    <div className='divider-line'></div>
                </div>
                <div className="Profile-section-div-logo">
                    <ProfileLogo profileLogo={'JD'} />
                    <AccountSecurity />
                </div>
            </div>
            <div className="Profile-section-input">

            </div>
        </div>
    )
}

export default Profile