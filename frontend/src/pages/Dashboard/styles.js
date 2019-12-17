import styled from 'styled-components';
import { darken } from "polished";

export const Container = styled.div`
  max-width: 600px;
  min-width: 70%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 800px) {
    header {
      display: flex;
      flex-direction: row;
      align-self: center;
      align-items: center;
    }
  }
  
  @media screen and (max-width: 800px) {
    header {
      display: grid;
      flex-direction: row;
      grid-gap: 20px; 
      align-self: center;
      align-items: center;
    }
  }
  
  select {
    width: 100%;
    height: 35px;
    background: white;
    color: gray;
    padding-left: 5px;
    font-size: 14px;
    border: none;
    border-radius: 4px;
    margin-left: 10px;

    option {
      color: black;
      background: white;
      display: flex;
      border-radius: 4px;
      white-space: pre;
      min-height: 20px;
      padding: 0px 2px 1px;
      font-family:Arial, Helvetica, sans-serif;
    }
  }

  input {
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
    margin: 10px 10px 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }
  
    ul {
      display: grid;
      @media screen and (min-width: 800px) {
        grid-template-columns: auto auto;
      }
      @media screen and (max-width: 800px) {
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      }
      grid-gap:15px;
      margin-top:30px;
      margin-bottom:30px;
    }

`;

export const Log = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #FFF;
  
  a {
    display: block;
    margin-top: 3px;
  }

  label {margin:2px}

  .leftRight {
    display: flex;   
    justify-content: space-between;    
    flex-wrap: wrap;
  }

  .right {
    display: flex;
    justify-content: flex-end;     
    flex-wrap: wrap; 
  }

  .left {
    display: flex;
    flex-wrap: wrap; 
  }  
`;


export const ButtonApagar = styled.button`
    width: 80px;
    margin: 5px 0;
    height: 33px;
    background: #f64c75;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, "#f64c75")};
    }
`;

export const ButtonArquivar = styled.button`
    width: 80px;
    margin: 5px;
    height: 33px;
    background: #3b9eff;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, "#3b9eff")};
    }
`;

export const ContainerPaginacao = styled.div`

label {
  text-align: center;
  margin: 0 auto;
  color: white;
}

div {
  display: flex;
  justify-content: center;     
  flex-wrap: wrap; 
}

button {
    width: 80px;
    margin: 5px;
    height: 33px;
    background: #3b9eff;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, "#3b9eff")};
    }
}    
`
