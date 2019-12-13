import React from 'react';

export default function Detail(props) {
    
    return(
        <div className="detail" >
            <dl>
                <dt>{props.title}</dt>
                <dd>{props.descricao}</dd>
            <dl/>
        </div>
    )
}