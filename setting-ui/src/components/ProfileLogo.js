import React from 'react'
import './ProfileLogo.css';
import { Button } from '@attrybtech/attryb-ui'

const ProfileLogo = ({ profileLogo }) => {
    const clickHandler = () => console.log("y")
    return (
        <div className="frame-1628">
            <div className="frame-1631">
                <div className="frame-1632">
                    <div className="photo-upload">
                        <div className='photo-upload-text'>
                            {profileLogo}
                        </div>
                    </div>
                </div>
                <div className="frame-1630">
                    <div className="frame-1630-heading">
                        Upload your profile photo
                    </div>
                    <div className="frame-1633">
                        <div className='frame-1633-text'>
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