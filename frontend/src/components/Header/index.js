import React from "react";
import { Container, Content, Profile } from './styles';
import { Link } from 'react-router-dom';
  
export default function Header(props) {
  return(
    <Container>
      <Content>
        <nav>
          <Link to='/dashboard'>DASHBOARD</Link>
          <p>&ensp;Você está logado com o token '{localStorage.getItem("central-erros-auth-token")}'</p>
        </nav>
        <aside>
          <Profile>
            <div>
              <strong>Nome Teste</strong>
              <Link to='/profile'>Meu Perfil</Link>
            </div>
            <img src="https://api.adorable.io/avatars/50/abott@adorable.png" alt="Nome Teste"/>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}