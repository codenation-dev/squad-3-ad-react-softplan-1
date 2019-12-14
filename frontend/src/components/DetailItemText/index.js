import React from 'react';
import '../../bulma.min.css';

const DetailItemText = (props) => {    
    return(
        <div className="panel">
            <p className="panel-heading ">{props.label}</p>
            <p className="panel-block has-text-white">{props.text}</p>
        </div>
    )
}

export default DetailItemText