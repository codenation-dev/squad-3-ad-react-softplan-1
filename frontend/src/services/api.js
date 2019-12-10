//////////////////////////////////////////////////////
//Documenta��o dos endpoints
//https://github.com/cpohlod/centralerros
//////////////////////////////////////////////////////

import axios from 'axios';
import { browserHistory } from  'react-router';

const API = axios.create({ baseURL : 'https://centralerros.herokuapp.com' })

  const getUsers = async ({token}) => {
    const { data } = await API.get(`/logins/${token}`);
    return data;
  };

  const login = async (history, email, pwd) => {
    const requestInfo = {
        method:'POST',
        body:JSON.stringify({ email:email
                            , pwd:pwd}),
        headers:{
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin' : '*',
        }
    };
    fetch(`https://centralerros.herokuapp.com/login`,requestInfo)
        .then(response => {
            if(response.ok) {
                console.log("login ok");
                return response.text();
            } else {
                console.log("não foi possível fazer o login");
                throw new Error('não foi possível fazer o login');
            }
        })
        .then(token => {
            localStorage.setItem('central-erros-auth-token',token);
            //browserHistory.push('/list');
            // console.log("Token: " + token)
            // console.log(history)
            history.push('/dashboard'); //n�o redireciona para o dashboard, o Marcelo deve saber pq
        })
        .catch(error => {
            //console.log(error.message);
            alert(error.message);            
            //this.setState({msg:error.message});
        });

  };

  const getLogs = async ({ token }) => {
    //const { data } = await API.get(`/logs/${token}`);
    const { data } = await API.get(`/logs/834463a1513858d7b2d2db1ecb99307045712fbd9474dfd78cf78b29db00e90b`);
    return data;
  };


  const register = async (history, name, email, pwd) => {
    const requestInfo = {
        method:'POST',
        body:JSON.stringify({name:name,
                             email:email,
                             pwd:pwd}),
        headers:{
            'Content-Type' : 'application/json',
            'Access-Control-Allow-Origin' : '*',
        }
    };

    fetch(`https://centralerros.herokuapp.com/savelogin`,requestInfo)
        .then(response => {
            if(response.ok) {
                console.log("usu�rio cadastrado com sucesso");
                return response.text();
            } else {
                console.log("n�o foi poss�vel salvar o novo usu�rio");
                throw new Error('n�o foi poss�vel salvar o novo usu�rio');
            }
        })
        .then(token => {
            //browserHistory.push('/');
            //console.log(history)
            history.push('/');
        })
        .catch(error => {
            //console.log(error.message);
            alert(error.message);
        });

  };  
  
  export { login, getUsers, getLogs, register };
  