function loginclick() {
    alert('login');
}

function promiseLogin(user, pwd) {
    return new Promise((resolve,reject) => {
       setTimeout(() =>{
         resolve('ok')
       }, 2000)
       if (x===30) {
         reject("erro");
       }
    })
  }

function cadastrarClick() {
    alert('cadastrar');
}