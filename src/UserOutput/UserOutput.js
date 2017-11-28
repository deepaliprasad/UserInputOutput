import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput"> 
            <p> Username: {props.userName} </p>
            <p> some more random text </p>
        </div>
    )
}


export default userOutput;
