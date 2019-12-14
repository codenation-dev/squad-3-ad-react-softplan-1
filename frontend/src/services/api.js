import axios from "axios";

const API = axios.create({ baseURL: "https://centralerros.herokuapp.com" });

const getUsers = async ({ token }) => {
  const { data } = await API.get(`/logins/${token}`);
  return data;
};

const login = async ( history, email, pwd ) => {
  const requestInfo = {
    method: "POST",
    body: JSON.stringify({ email: email, pwd: pwd }),
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
      history.push("/dashboard");
    })
    .catch(error => {
      alert(error.message);
    });
};

const getLogs = async ({ token }) => {
  //const { data } = await API.get(`/logs/${token}`).response.json();
  console.log(token);
  let response = await fetch(`https://api.github.com/users/jaquiel`);
  let data = await response.json()
  console.log(data);
  return data;
};

const getLog = async (history, token, id_log, setData) => {
  const tokenJaquiel = '834463a1513858d7b2d2db1ecb99307045712fbd9474dfd78cf78b29db00e90b';
  const response = await API.get(`/log/${id_log}/${tokenJaquiel}`);
  const data = response.data;
  // const response = await fetch(`https://centralerros.herokuapp.com/log/${id_log}/${tokenJaquiel}`);
  // const data = await response.json();
  setData(data);
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

  fetch(`https://centralerros.herokuapp.com/savelogin`, requestInfo)
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
      //browserHistory.push('/');
      //console.log(history)
      history.push("/");
    })
    .catch(error => {
      //console.log(error.message);
      alert(error.message);
    });
};

export { login, getUsers, getLogs, register, getLog };
