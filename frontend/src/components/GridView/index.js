import React from 'react'
import Datatable from '../Datatable';
import Button from '../Button';
import SelectOption from '../SelectOption';
import Search from '../Search';

export default function GridView() {

  const columns = {};
  const data = {};

  return (
     
    <React.Fragment>
      <Button label={'Arquivar'} />
      <Button label={'Apagar'} />
      <SelectOption />
      <Search />
      <Datatable columns={columns} items={data} />
    </React.Fragment>
  )

}