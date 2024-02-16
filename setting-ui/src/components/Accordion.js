import React from 'react'
import './Accordion.css';

const Accordion = ({text,subtext}) => {
  return (
    <div className='Accordion-Frequency-capping1'>
        <div className='text-support'>
            <div className="frame-1190">
                <div className='frame-1190-text'>
                {text}
                </div>
                <div className="frame-1190-subtext">
                {subtext}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accordion;