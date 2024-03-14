import React, { useState } from 'react'
import { List, ListItem } from '@attrybtech/attryb-ui';
import './Dropdown.css'

const sample = [
    {
        _id: "1",
        value: "Fannie Morgan",
        data: {
            _id: "0AKGxNWVoFgYy5nnJu5ece4797eaf5e",
            value: "Douglas Ramirez",
            email: "na@zed.az",
        },
    },
    {
        _id: "2",
        value: "Derrick Banks",
        data: {
            _id: "DKSmS636ccc0e4a2e9",
            value: "Eugene Norton",
            email: "gaktertin@ho.br",
        },
    },
    {
        _id: "3",
        value: "Leo Schultz",
        data: {
            _id: "5SOVguIqGRY54uSece4797feauqe",
            value: "Cory Mullins",
            email: "wetel@ra.az",
        },
    },
    {
        _id: "4",
        value: "Blake Roy",
        data: {
            _id: "tn9598MB2BXNk2ERlTnJ636ccc0e4a2f1",
            value: "Bryan McKinney",
            email: "cem@birna.edu",
        },
    },
];

const Dropdown = () => {
    const [active, setActive] = useState(sample[1]);
    const [active2, setActive2] = useState({})

    const selectHandler = (item) => {
        console.log({ selection: item });
        if (!item || !Object.keys(item)?.length) return;
        setActive(item);
    };

    const selectHandler2 = (item) => {
        console.log({ selection: item });
        if (!item || !Object.keys(item)?.length) return;
        setActive2(item);
    };

    return (
        <div className="DocEntry" style={{ marginBottom: "200vh" }}>
            <div className="Example">
                <List
                    list={[...sample]}
                    activeItem={active2}
                    buttonPlaceholder="Role"
                    searchProps={[]}
                    selectCallback={selectHandler2}
                >
                    {[...sample].map((item) => {
                        return (
                            <ListItem key={item._id} data={item}>
                                {item.value}
                            </ListItem>
                        );
                    })}
                </List>
            </div>
        </div>
    )
}

export default Dropdown;