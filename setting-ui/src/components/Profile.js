import React from 'react'
import "./Profile.css"
import ProfileLogo from './ProfileLogo'
import AccountSecurity from './AccountSecurity'

const Profile = () => {
    return (
        <div className='frame-1620'>
            <div className="frame-1610">
                <div className="frame-1621">
                    <div className='frame-1621-text'>My Profile</div>
                </div>
                <div className="frame-1607">
                    <ProfileLogo/>
                    <AccountSecurity/>
                </div>
            </div>
            <div className="frame-1619">

            </div>
        </div>
    )
}

export default Profile