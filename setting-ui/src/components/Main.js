import React from 'react'
import Navbar from './Navbar';
import Profile from './Profile';
import Header from './Header';
import "./Main.css";

const Main = () => {
    return (
        <div className='setting-page-main-content'>
            <Navbar />
            <Header
                title="Personal Info"
                supportingText="Update your Personal details and privacy preferences"
            />
            <Profile />
            
        </div>
    )
}

export default Main;