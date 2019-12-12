import React from 'react'
import Datatable from '../Datatable';
import Button from '../Button';
import SelectOption from '../SelectOption';
import Search from '../Search';

export default function GridView() {

  return (
     
    <React.Fragment>
      <Button label={'Arquivar'} />
      <Button label={'Apagar'} />
      <SelectOption />
      <Search />
      <Datatable />
    </React.Fragment>
  )

}