import React , { Component } from 'react'
import { Link } from 'react-router-dom';

class GridView extends Component {
  state = {
    items:[]
  };

  componentDidMount() {
    console.log("componentDidMount");
    this.load();
  }

  load = async () => {
    const token = localStorage.getItem("central-erros-auth-token");
    console.log("getLogs token:"+token);
    fetch(`http://localhost:8090/buscalogs/${token}`)
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error("não foi possível salvar o novo usuário");
            }
          })
          .then(logs => {
            console.log(logs.length);
            this.setState({items: logs});
          })
          .catch(error => {
            console.log(error.message);
            this.setState({items: []});            
          });
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <h1>Forum</h1>
        <table>
          <thead>
            <tr>
              <td>Level</td>
              <td>Log</td>
              <td>Eventos</td>
            </tr>
          </thead>
          <tbody>
            {
                items.map(item=>(
                  <tr key={item.id}>
                    <td>{item.type}</td>
                    <td>{item.title}</td>
                    <td>{item.quantity}</td>
                    <Link data-test="link" to={`/detail:${item.id}`}>Detalhe</Link>
                  </tr>
                ))
            }
          </tbody>
        </table>
      </div>
      );
    }
}
export default GridView;
