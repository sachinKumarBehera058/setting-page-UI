import React from 'react'
import './ProfileLogo.css';
import { Button } from '@attrybtech/attryb-ui'

const ProfileLogo = ({ profileLogo }) => {
    const clickHandler = () => console.log("y")
    return (
        <div className="profile-icon">
            <div className="profile-icon-box">
                <div className="profile-icon-box-div">
                    <div className="photo-upload">
                        <div className='photo-upload-text'>
                            {profileLogo}
                        </div>
                    </div>
                </div>
                <div className="profile-icon-box-content">
                    <div className="profile-icon-box-content-heading">
                        Upload your profile photo
                    </div>
                    <div className="profile-icon-box-content-details">
                        <div className='profile-icon-box-content-details-text'>
                            This helps your teammates recognise you in our app
                        </div>
                        <Button id="btn-up" variant="solid" colorScheme="secondary" onClick={clickHandler}>
                            Upload Photo
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileLogo;