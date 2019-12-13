import React from "react";
import GridView from "../../components/GridView";

export default function Dashboard(props) {

  const handleSair = () => {
    localStorage.removeItem("central-erros-auth-token");
    props.history.push("/");
  }

  return (
    <React.Fragment>
      <div className="dashboard">
        <button onClick={handleSair}>Sair</button>     
      </div>
      <div> 
        <GridView />
      </div>    
    </React.Fragment>
  );
}