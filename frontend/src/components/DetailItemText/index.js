import React from 'react';

const DetailItemText = (props) => {    
    return(
        <div>
            <h2>{props.label}</h2>
            <p>{props.text}</p>
        </div>
    )
}

export default DetailItemText