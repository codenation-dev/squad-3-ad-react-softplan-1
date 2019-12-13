import React , { useState } from 'react';

export default function DataTable(props) {

  const [columns, setColumns] = useState({});
  const [items, setItems] = useState({});


  const handleSelectItem = id => { }


    const cols = (props) => { 
      setColumns(props.columns);
      return columns.state.map(column  => <th>{column}</th> );
    }

    const its = (props) => {

      setItems(props.items);

      return items.state.map(item => (
                                        <tr key={item.id}>
                                          <td>             
                                            <input type="checkbox" id="scales" name="scales" checked> </input>
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
          {its}
        </tbody>
      </div>
    )
}