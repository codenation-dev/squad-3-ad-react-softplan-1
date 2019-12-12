import React from 'react';

export default function DataTable(props) {

  const handleSelectItem = id => { }


    const items = props.items.map(item => {
      return (
        <tr key={item.id}>
          <td>             
              <input type="checkbox" id="scales" name="scales" checked> </input>
          </td>
          <td>{item.level}</td>
          <td>{item.log}</td>
          <td>{item.eventos}</td>
        </tr>
        )
      })

    return (
      <div clssName="table">
        <thead>
          <tr>
            <th>Level</th>
            <th>Log</th>
            <th>Eventos</th>
          </tr>
        </thead>
        <tbody>
          {items}
        </tbody>
      </div>
    )
}