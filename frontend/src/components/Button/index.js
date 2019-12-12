import React from 'react';

export default function Button(props){

    return (
        <div className="button">
            <button>{props.label}</button> 
        </div>
    )
}