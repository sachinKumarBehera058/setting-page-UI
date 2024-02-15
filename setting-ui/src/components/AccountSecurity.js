import React from 'react'
import UpdateDetails from './UpdateDetails'
import './AccountSecurity.css'


const AccountSecurity = () => {
    
    return (
        <div className='frame-1619'>
            <div className="frame-1617">
                <div className="frame-1621">
                    <div className='frame-1621-text'>Account Security</div>
                </div>
                <div className="frame-1615">
                    <div className="frame-1616">
                        <UpdateDetails text='Email' subtext="Johndoe123@shopify.com" btn="Change Email" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountSecurity