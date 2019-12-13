import React from "react";
import GridView from "../../components/GridView";
import Button from "../../components/Button";

const Dashboard = (props) => {

  const handleSair = () => {
    localStorage.removeItem("central-erros-auth-token");
    props.history.push("/");
  }

  return (
    <React.Fragment>
    <div className="dashboard">
      <Button label={'Sair'}  onClick={handleSair} />
    <div className="gridview"> 
      <GridView />
    </div>
    </div>
    </React.Fragment>
  )
}

export default Dashboard;
