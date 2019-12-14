import React from 'react';
import '../../bulma.min.css';
import DetailItemColor from '../DetailItemColor';

const DetailItemText = (props) => {    
    return(
        <div className="panel">
            <div className="panel-heading ">{props.label+ ' '}
                <DetailItemColor type={props.type}/> 
            </div>
            <p className="panel-block has-text-white">{props.text}</p>
        </div>
    )
}

export default DetailItemText