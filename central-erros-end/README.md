# Backend Central de Erros

Article link : https://localhost:8080/central-erros-end/

endpoints

 - Login <URL/login>
POST com JSON {"email":"xxxx@xxxx.com.br", "pwd":"abc@1223"}
Exemplo:
https://localhost:8080/login
retorno um token

- Cadastro de Login  <URL/savelogin/{token}>
POST com JSON {"name":"amanda", "email":"amanda@softplan.com.br", "pwd":"abc@1223"}
Exemplo:
localhost:8080/savelogin/681f2ef541f14f173066461d1a04f0360a09b255bdc84373e84a99d3797c4f23

- Todos os Logs <URL/logs{token}>
GET 
Exemplo:
http://localhost:8080/logs/681f2ef541f14f173066461d1a04f0360a09b255bdc84373e84a99d3797c4f23
