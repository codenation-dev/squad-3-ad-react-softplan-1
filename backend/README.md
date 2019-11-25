# Backend Central de Erros

Article link : https://localhost:8080/central-erros-end/

endpoints

 - Login <URL/login>
POST com JSON {"email":"xxxx@xxxx.com.br", "pwd":"abc@1223"}
Exemplo:
https://localhost:8080/login
retorno um token

- Cadastro de Login  <URL/savelogin/{token}>
POST com JSON {"name":"xxxxx", "email":"xxxxx@xxxxx.com.br", "pwd":"abc@1223"}
Exemplo:
localhost:8080/savelogin/681f2ef541f14f1730664

- Um Login <URL/findlogin/{token}&{email}>
GET 
Exemplo:
http://localhost:8080/findlogin/681f2ef541f14f1730664&xxxxx@xxxxx.com.br


- Todos os Logins <URL/logins{token}>
GET 
Exemplo:
http://localhost:8080/logins/681f2ef541f14f1730664

- Todos os Logs <URL/logs{token}>
GET 
Exemplo:
http://localhost:8080/logs/681f2ef541f14f1730664
