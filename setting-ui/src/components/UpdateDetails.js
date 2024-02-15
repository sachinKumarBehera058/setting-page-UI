import React from 'react'
import './UpdateDetails.css'
import { Button } from '@attrybtech/attryb-ui'

const UpdateDetails = ({text, subtext, btn}) => {
    const clickHandler = () => console.log("y");
    return (
        <div className='update-container'>
            <div className='update-container-text'>
                <div className="update-container-text-heading">
                    {text}
                </div>
                <div className="update-container-text-subheading">
                    {subtext}
                </div>
            </div>
            <Button id='btn-change' variant="solid" colorScheme="secondary" onClick={clickHandler}>
                {btn}
            </Button>
        </div>
    )
}

export default UpdateDetails