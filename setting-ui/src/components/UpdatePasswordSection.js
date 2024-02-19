import React,{useState} from 'react'
import { Input } from '@attrybtech/attryb-ui'
import './UpdatePasswordSection.css'

const UpdatePasswordSection = () => {
    const [value, setValue] = useState("");
    console.log(value);
    return (
        <div className='change-email-lable'>
            Please enter your password
            <div className='change-email-input'>
                <Input
                    state={"default"}
                    placeholder={"Lorem is ipsum..."}
                    preFilledValue={value}
                    // maxCharsLimit={maxChars}
                    onChange={(event) => {
                        setValue(event.target.value)
                    }}
                />
            </div>
            <div className='change-email-input'>
                <Input
                    state={"default"}
                    placeholder={"Lorem is ipsum..."}
                    preFilledValue={value}
                    // maxCharsLimit={maxChars}
                    onChange={(event) => {
                        setValue(event.target.value)
                    }}
                />
            </div>
            <div className='change-email-input'>
                <Input
                    state={"default"}
                    placeholder={"Lorem is ipsum..."}
                    preFilledValue={value}
                    // maxCharsLimit={maxChars}
                    onChange={(event) => {
                        setValue(event.target.value)
                    }}
                />
            </div>
        </div>
    )
}

export default UpdatePasswordSection