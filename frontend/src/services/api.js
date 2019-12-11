import axios from "axios";
import { createBrowserHistory } from "history";

const API = axios.create({ baseURL: "https://centralerros.herokuapp.com" });

const getUsers = async ({ token }) => {
  const { data } = await API.get(`/logins/token=${token}`);
  return data;
};

const login = async ({ email, pwd }) => {
  const requestInfo = {
    method: "POST",
    body: JSON.stringify({ login: email, senha: pwd }),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };
  fetch(`https://centralerros.herokuapp.com/login`, requestInfo)
    .then(response => {
      if (response.ok) {
        console.log("login ok");
        return response.text();
      } else {
        console.log("não foi possível fazer o login");
        throw new Error("não foi possível fazer o login");
      }
    })
    .then(token => {
      localStorage.setItem("central-erros-auth-token", token);
      createBrowserHistory.push("/list");
    })
    .catch(error => {
      this.setState({ msg: error.message });
    });
};

const getLogs = async ({ token }) => {
  const { data } = await API.get(`/logs/token=${token}`);
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
              console.log("usuário cadastrado com sucesso");
              return response.text();
          } else {
              console.log("não foi possível salvar o novo usuário");
              throw new Error('não foi possível salvar o novo usuário');
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
