import axios from 'axios';
import { browserHistory } from  'react-router';

const API = axios.create({ baseURL : 'https://centralerros.herokuapp.com' })

  const getUsers = async ({token}) => {
    const { data } = await API.get(`/logins/${token}`);
    return data;
  };

  const login = async ({email, pwd}) => {
    const requestInfo = {
        method:'POST',
        body:JSON.stringify({ login:email
                            , senha:pwd}),
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
            browserHistory.push('/list');
        })
        .catch(error => {
            this.setState({msg:error.message});
        });

  };

  const getLogs = async ({ token }) => {
    //const { data } = await API.get(`/logs/${token}`);
    const { data } = await API.get(`/logs/834463a1513858d7b2d2db1ecb99307045712fbd9474dfd78cf78b29db00e90b`);
    return data;
  };
  
  export { login, getUsers, getLogs };
  