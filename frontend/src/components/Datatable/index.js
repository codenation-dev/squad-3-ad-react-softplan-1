import React, { useEffect } from 'react';
import Button from '../Button';
import Table from '../Table';


export default function DataTable(props) {

  const handleSelectItem = id => { }
  const handleDelete = id => { }
  const handleHistory = id => { }

  useEffect(() => {
    console.log(props.items)
    console.log(props.columns)
  });

    return (
      <React.Fragment>
        <Table>
          <Table.Head>
            {
              props.columns.map(column  => <Table.Head.Item>{column}</Table.Head.Item> )
            }
          </Table.Head>
          <Table.Body>
                {                      
                  props.items.map( (option, idx) => {
                    return (
                      <React.Fragment>
                      <Table.Body.Row key={idx}> 
                        <Table.Body.Row.Item><Button label={"Arquivar"}/></Table.Body.Row.Item>
                        <Table.Body.Row.Item><Button label={"Apagar"}/></Table.Body.Row.Item>
                        <Table.Body.Row.Item>{option.type}</Table.Body.Row.Item>
                        <Table.Body.Row.Item>
                          {option.detail}
                          {option.origin}
                          {option.createDate}
                        </Table.Body.Row.Item>
                        <Table.Body.Row.Item>{option.quantity}</Table.Body.Row.Item>
                      </Table.Body.Row>
                      </React.Fragment>   

                    );
                  })           
                }
          </Table.Body> 
        </Table>
      </React.Fragment>
    )
}