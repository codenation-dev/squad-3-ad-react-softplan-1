import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  min-width: 70%;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  header {
    display: flex;
    flex-direction: row;
    align-self: center;
    align-items: center;
  }
  select {
    width: 100%;
    height: 35px;
    background: white;
    color: gray;
    padding-left: 5px;
    font-size: 14px;
    border: none;
    margin-left: 10px;

    option {
      color: black;
      background: white;
      display: flex;
      white-space: pre;
      min-height: 20px;
      padding: 0px 2px 1px;
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
    grid-template-columns: repeat(2, 1fr);
    grid-gap:15px;
    margin-top:30px;
  }
`;

export const Log = styled.li`
  display:flex;
  padding: 20px;
  border-radius: 4px;
  background: #FFF;
  

  strong {
    display: block;
    color: #7159c1;
    font-size: 20px;
    font-weight: normal;

  }

  span {
    display: block;
    margin-top: 3px;
    color: #666;
  }

`;


