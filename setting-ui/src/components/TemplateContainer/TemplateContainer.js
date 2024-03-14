import React from 'react'
import Navbar from '../Navbar/Navbar'
import TemplateLibrary from '../TemplateLibrary/TemplateLibrary'
import { VscAdd } from "react-icons/vsc";
import Chart from '../Chart/Chart';

import "./TemplateContainer.css"
import Header from '../Header/Header'
import { Button } from '@attrybtech/attryb-ui'

const TemplateContainer = () => {
    const clickHandler = () => console.log("y")
    return (
        <div className='template-container'>
            <Navbar />
            <div className="templateLibrary">
                <div className="header-wrapper">
                    <div className='header-wrapper-section'>
                        <div className='header-section'>
                            <Header title={'Template Library'} supportingText={'Create and Manage your Templates'} />
                        </div>
                        <div className='button-section'>
                            <Button onClick={clickHandler}> <VscAdd /> Create Template</Button>
                        </div>
                    </div>
                </div>
                <TemplateLibrary />
            </div>

        </div>
    )
}

export default TemplateContainer