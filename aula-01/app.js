/*
   comentario em bloco
*/

//comentario em linha

//permite escrever uma mensagem via terminal vscode
console.log('Testando o node.JS');

//import da biblioteca qu faz entrada de dados pelo usuario
var readline = require ('readline');

//criamos um objeto entradaDados com as referencias do readline
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});

//O que é uma função call back - é uma função que quando chamada ela
//retorna o seu conteudo em uma uncia instrução, ou seja, em apenas
//um passo na programação

//Criamos a função call back para receber os dados digitado pelo usuário
    //(O objeto entraDados aguarda a digitação do usuário, após a 
    //digitação do conteúdo é acionado um call back para encaminhar os dados
    //para o console.log. Esse conteúdo foi encaminhado através do parametro
    //dados da função)

//o entradaDados vai pegar a digitação, chamara funcao e jogar na varivel nome o conteudo. isso é um callback: chamo uma funçao e o retorno dela tras um conteudo
entradaDados.question("Digite seu nome: \n", function (dados) {

    console.log('Bem-vinda, ' +dados+ ' ao servidor Node.js');

});



