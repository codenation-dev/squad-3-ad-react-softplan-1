import React from "react";
import GridView from "../../components/GridView";

const Dashboard = (props) => {

  const handleSair = () => {
    localStorage.removeItem("central-erros-auth-token");
    props.history.push("/");
  }

  return (
    <React.Fragment>
    <div className="dashboard">
      <h1>Dashboard</h1>
      <button onClick={handleSair}>Sair</button>
    </div>
    <div className=""> 
      <GridView />
    </div>
    </React.Fragment>
  )
}

export default Dashboard;
