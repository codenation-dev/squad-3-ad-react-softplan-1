import React from 'react';

export default function Button(props){

    return (
        <div className="button">
            <button onClick={props.onClick}>{props.label}</button> 
        </div>
    )
}