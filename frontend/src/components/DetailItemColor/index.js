import React from 'react';

const DetailItemText = (props) => {   
    
    //WARNING, INFO, DEBUG e vazio
    const styledColor = props.type;

    if (styledColor === "")
        return <></>

    return(
        <div className={styledColor}>
            <p>{props.type}</p>
        </div>
    )
}

export default DetailItemText