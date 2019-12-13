import axios from "axios";

const login = async ( history, email, pwd ) => {
  const requestInfo = {
    method: "POST",
    body: JSON.stringify({ email, pwd }),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  };
  fetch("http://localhost:8090/login", requestInfo)
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
      console.log("login ok - "+token);
      localStorage.setItem("central-erros-auth-token", token);
      history.push("/dashboard");
    })
    .catch(error => {
      alert(error.message);
    });
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

  fetch("http://localhost:8090/savelogin", requestInfo)
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
      console.log(error.message);
      alert(error.message);
    });
};

const getLogs = async () => {
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
          return logs;
        })
        .catch(error => {
          console.log(error.message);
        });
};

export { register, login, getLogs};
