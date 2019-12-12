import React from 'react';

export default function Search(props) {

    return (
        <div className="search">
            <input 
                type="search" 
                placeholder={props.placeholder} 
                size={props.size}
            />
        </div>

    )

} 