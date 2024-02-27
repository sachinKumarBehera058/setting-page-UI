import React from 'react';
import './Navbar.css';
import { Navbar, Button } from '@attrybtech/attryb-ui'
import backIcon from '../../Images/back-icon.svg'

const NavbarVariant = ({ templateName, saveandscheduleclick, saveAndDraftClick, handleExitButton }) => {

  return (
    <div className="navbar-wrapper">
      <div className="navbar-wrapper-left">
        <div className="navbar-wrapper-left-icon">
          <img src={backIcon} alt="back-icon" onClick={handleExitButton}></img>
        </div>
      </div>

      <div className="navbar-wrapper-right">
        <Navbar
          className="Navbar"
          navbarLeftSection={
            <>
              <div className="navbarLeftSection">
                <div className='navbarLeftSection-logo text-md--md'>
                  {templateName}
                </div>
              </div>
            </>
          }
          navbarRightSection={
            <>
              <div className='navbarRightSection'>
              <Button
                variant="solid"
                colorScheme="secondary"
                onClick={saveAndDraftClick}
              >
                Save as Draft
              </Button>
              <Button  id='button2' onClick={saveandscheduleclick}>Save and Schedule</Button>
              </div>
            </>
          }
        />
      </div>

    </div>
  )
}

export default NavbarVariant;