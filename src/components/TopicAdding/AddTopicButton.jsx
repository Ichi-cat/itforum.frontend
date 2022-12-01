import React, {useState} from 'react';
import {IconCirclePlus} from '@tabler/icons';
import {Link} from "react-router-dom";

const AddTopicButton = (props) => {
    return (
        <Link to="/addTopic" style={{position: "fixed", right: 0, bottom: 0}}>
            <IconCirclePlus style={{width: 80, height: 80, zIndex: 1000}}/>
        </Link>
    );
}
export default AddTopicButton