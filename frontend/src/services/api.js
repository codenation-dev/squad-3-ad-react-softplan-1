import axios from "axios";

const API = axios.create({ baseURL: "https://centralerrosapp.herokuapp.com" });

const getUsers = async ({ token }) => {
  const { data } = await API.get(`/logins/${token}`)
  .then(function(response){
    console.log(response.data); 
    console.log(response.status);
    return response.data; 
  });
  return data;
};

const getUser = async ( token, call) => {
  const { data } = await API.get(`/findlogin/${token}`)
  .then(function(response){
    console.log(response.data); 
    console.log(response.status);
    return response.data; 
  });
  call(data);
  console.log(data);
};

const login = async ( history, email, pwd, call ) => {
  const requestInfo = {
    method: "POST",
    body: JSON.stringify({ email: email, pwd: pwd }),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };     
  fetch(`https://centralerrosapp.herokuapp.com/login`, requestInfo)
    .then(response => {
      if (response.ok) {
        console.log("login ok");
        return response.text();
      } else {
        console.log("não foi possível fazer o login");
        throw new Error("não foi possível fazer o login");
      }
    })
    .then(data => {
      const json = JSON.parse(data);
      if(json.status === "OK") {
        localStorage.setItem("central-erros-auth-token", json.token);
        history.push("/dashboard");
      } else {
        call(json.status);
        console.log(json.status);
        history.push("/");
      }
    })
    .catch(error => {
      console.log(error.message);
      call( error.message);
      history.push("/");
    });
};

const getLogs = async ({ token }) => {
  const { data } = await API.get(`/logs/${token}`)
  .then(function(response){
    console.log(response.data); 
    console.log(response.status);
    return response.data; 
  });
  return data;
};

const register = async (history, name, email, pwd) => {
  const requestInfo = {
    method: "POST",
    body: JSON.stringify({ name: name, email: email, pwd: pwd }),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };

  fetch(`https://centralerrosapp.herokuapp.com/savelogin`, requestInfo)
    .then(response => {
      if (response.ok) {
        console.log("usuário cadastrado com sucesso");
        return response.text();
      } else {
        console.log("não foi possível salvar o novo usuário");
        throw new Error("não foi possível salvar o novo usuário");
      }
    })
    .then(token => {
      history.push("/");
    })
    .catch(error => {
      alert(error.message);
    });
};

export { login, getUser, getUsers, getLogs, register };