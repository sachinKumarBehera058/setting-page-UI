import React , {useState} from 'react'
import { Input } from '@attrybtech/attryb-ui'

const update_email_section = () => {
    const [value, setValue] = useState("");
    console.log(value);
    return (
        <div>
            <div>
                <div>{head}</div>
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

export default update_email_section