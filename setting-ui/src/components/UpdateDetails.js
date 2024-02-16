import React,{useState} from 'react'
import './UpdateDetails.css'
import {
    AlertPopup,
    AlertPopupHeader,
    AlertPopupBody,
    AlertPopupFooter,
    Button,
    useModal,
} from '@attrybtech/attryb-ui'

const UpdateDetails = ({ text, subtext, head, btn,compo}) => {
    const { modalState, modalRef, exitModal, showModal } = useModal()
    const [value, setValue] = useState("");
    console.log(value);
    function modalOkayHandler() {
        console.log("Accepted");
        setValue("");
        exitModal();
    }

    function modalCancelHandler() {
        console.log("Cancelled");
        setValue("");
        exitModal();
    }


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
            <div className="Doc DocAlertPopup">
                <div className="DocEntry">
                    <div className="Example" style={{ gridGap: "2rem" }}>
                        <Button id='btn-change' variant="solid" colorScheme="secondary" onClick={showModal}>
                            {btn}
                        </Button>
                        <AlertPopup
                            wrapperRef={modalRef}
                            name="example-popup-1"
                            visibility={modalState}
                            onBackdropClick={modalCancelHandler}>
                            <AlertPopupHeader>{btn}</AlertPopupHeader>
                            <AlertPopupBody>
                                <div>{head}</div>
                               <div >{compo}</div>  
                            </AlertPopupBody>
                            <AlertPopupFooter>
                                <Button onClick={modalCancelHandler} variant="link">
                                    Cancel
                                </Button>
                                <Button onClick={modalOkayHandler}>Okay</Button>
                            </AlertPopupFooter>
                        </AlertPopup>
                    </div>
                </div>
            </div>
            {/* <Button id='btn-change' variant="solid" colorScheme="secondary" onClick={showModal}>
                {btn}
            </Button> */}
        </div>
    )
}

export default UpdateDetails