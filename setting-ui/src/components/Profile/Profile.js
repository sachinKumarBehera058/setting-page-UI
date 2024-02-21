import React from 'react'
import "./Profile.css"
import ProfileLogo from '../ProfileLogo/ProfileLogo'
import AccountSecurity from '../AccountSecurity/AccountSecurity'

const Profile = () => {
    return (
        <div className='profile-section'>
            <div className="profile-section-div">
                <div className="profile-section-div-heading">
                    <div className='profile-section-div-heading-text text-lg--sb'>My Profile</div>
                    <div className='divider-line'></div>
                </div>
                <div className="profile-section-div-logo">
                    <ProfileLogo profileLogo={'JD'} />
                    <AccountSecurity />
                </div>
            </div>
            <div className="profile-section-input">

            </div>
        </div>
    )
}

export default Profile