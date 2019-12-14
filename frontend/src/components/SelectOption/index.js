import React, { useState } from 'react';


export default function SelectOption(props) {     

    const [selectedOption, setSelectedOption] = useState('');

    return(
        <div className="select-option">
        <select>{
                   props.options.map( option => <option>{option}</option>)
                }
        </select>
        </div>
    )
}