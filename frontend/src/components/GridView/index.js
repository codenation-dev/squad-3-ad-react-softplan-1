import React from 'react';
import MUIDataTable from "mui-datatables";

export default function GridView(props) {
  
  return(
    
  <MUIDataTable 
    title={props.title} 
    data={props.data} 
    columns={props.columns} 
    options={props.options} 
  />
  );

};