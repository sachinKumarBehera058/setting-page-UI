import React from 'react'
import './Accordion.css';

const Accordion = ({text,subtext}) => {
  return (
    <div className='Accordion-Frequency-capping1'>
        <div className='text-support'>
            <div className="text-support-box">
                <div className='text-support-box-text'>
                {text}
                </div>
                <div className="text-support-box-subtext">
                {subtext}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accordion;