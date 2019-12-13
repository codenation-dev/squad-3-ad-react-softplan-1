import React, { Component } from "react";
import { Link } from 'react-router-dom';

class Detail extends Component {

    state = {
        log:{}
    };

    async componentDidMount() {
        console.log("log - componentDidMount");
        const { id } = this.props.match.params;

        this.setState({log: {}});
    }

    render() {
        const {log} = this.state;

        return (
            <div>
               <h1>Detalhe</h1>
               <h2>{log.detail}</h2>
               <p>{log.createDate}</p>
               <Link to="/dashboard">Voltar</Link>
            </div>
        )
    }
};
export default Detail;
