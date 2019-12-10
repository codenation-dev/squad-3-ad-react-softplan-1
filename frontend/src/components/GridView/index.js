import React from 'react';
import MUIDataTable from "mui-datatables";
import { getLogs, login } from '../../services/api';

const TOKEN = '834463a1513858d7b2d2db1ecb99307045712fbd9474dfd78cf78b29db00e90b';

const columns = ["Name", "Tipo", "Origem", "Story", "Quantidade", "Data Criação"];


const data = [
 ["Joe James", "Test Corp", "Yonkers", "NY"],
 ["John Walsh", "Test Corp", "Hartford", "CT"],
 ["Bob Herm", "Test Corp", "Tampa", "FL"],
 ["James Houston", "Test Corp", "Dallas", "TX"],
];

const options = {
  filterType: 'checkbox',
};

export default function GridView() {
  login("zeca@gmail.com","jecatatu");
  const data2 = getLogs(TOKEN);
  console.log(data2)

  return(
    
  <MUIDataTable 
    title={"Central de Erros"} 
    data={data} 
    columns={columns} 
    options={options} 
  />
  );

};