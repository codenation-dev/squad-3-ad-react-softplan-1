import React from 'react';

const DetailItemText = (props) => {   
    
    let styledColor = "";

    if (props.type === "WARNING")
        styledColor = "is-danger";

    if (props.type === "INFO")
        styledColor = "is-info";

    if (props.type === "DEBUG")
        styledColor = "is-warning";      

    if (styledColor === "")
        return <></>

    return(
        <p className={"tag " + styledColor}>{props.type}</p>
    )
}

export default DetailItemText