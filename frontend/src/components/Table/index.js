import React, { useEffect } from 'react';

export default function Table(props) {

    useEffect(() => {
        console.log(props.items)
        console.log(props.columns)
        console.log(props.children)
      });


    return (
            <table 
                className="table"
            >
                {props.children}
            </table>
    ) 
}

Table.Head = (props) => (<thead><tr>{props.children}</tr></thead>) 
Table.Head.Item = (props) => (<th>{props.children}</th>) 
Table.Body = (props) => (<tbody>{props.children}</tbody>) 
Table.Body.Row = (props) => (<tr>{props.children}</tr>) 
Table.Body.Row.Item = (props) => (<td>{props.children}</td>)

