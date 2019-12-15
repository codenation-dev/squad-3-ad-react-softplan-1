import React from 'react';
import '../../bulma.min.css';

const DetailItemText = (props) => {   
    
    let styledColor = "";

    if (props.type === "WARNING")
        styledColor = "is-warning";

    if (props.type === "INFO")
        styledColor = "is-info";

    if (props.type === "DEBUG")
        styledColor = "is-primary";   
        
    if (props.type === "ERROR")
        styledColor = "is-danger";           

    if (styledColor === "")
        return <></>

    return(
        <p className={"tag " + styledColor}>{props.type}</p>
    )
}

export default DetailItemText