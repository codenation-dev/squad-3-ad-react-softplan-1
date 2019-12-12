import React from "react";

const Dashboard = (props) => {

  const handleSair = () => {
    localStorage.removeItem("central-erros-auth-token");
    props.history.push("/");
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleSair}>Sair</button>
    </div>
  )
}

export default Dashboard;
