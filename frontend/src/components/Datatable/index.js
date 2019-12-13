import React , { useState } from 'react';


export default function DataTable(props) {

  const [columns, setColumns] = useState([]);
  const [items, setItems] = useState([]);



  const handleSelectItem = id => { }


    const cols = () => { 
     columns.state.map(column  => <th><p>mmm</p>{column}</th> );
    }

    const its = (props) => {

      setItems(props.items);

      return items.state.map(item => (
                                        <tr key={item.id}>
                                          <td>             
                                            <input type="checkbox" checked> </input>
                                          </td>
                                          <td>{item.level}</td>
                                          <td>{item.log}</td>
                                          <td>{item.eventos}</td>
                                        </tr>
                                        )
                              )
    }

    return (
      <div className="table">
        <thead className="table-header">
          <tr>
            {cols}
          </tr> 
        </thead>
        <tbody className="table-body">
          {items}
        </tbody>
      </div>
    )
}