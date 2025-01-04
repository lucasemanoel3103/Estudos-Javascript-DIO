// As funções assícronas funcionam com promises, pórem com uma sintaxe mais simples;
// Precisamos declarar a função com a palavra async;
// E quando precisamos aguardar por algo a instrução precisa de await;
// Podemos aplicar o recurso em funções anônimas e métodos de classe;
// Tentar usar o await sem o async gera um erro;
//Exemplo de uso: inserçãp de dado no banco;

//

//Prático
function getUser(id) {
   return fetch(`https://reqres.in/api/users?id=${id}`) 
    .then(data => data.json())
    .catch(err => console.log(err))
}

async function showUserName(id) {
    const user = await getUser(id)
    
    console.log(`O nome do usúario é: ${user.data.first_name}`)
}

showUserName(3)