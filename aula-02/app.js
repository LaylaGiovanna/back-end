/*********************************************************
 * Obejtivo: realizar a média escolar de 4 notas de alunos
 * Data:27/01/2023
 * Autor; Layla Giovanna
 * Versão: 1.0
**********************************************************/

console.log('Sistema de Calculo de Medias Escolares \n');

//import da biblioteca para entrada de dados
var readline = require('readline');
const { stdin, stdout } = require('process');

//Criamos um objeto para manipular a entrada de dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: stdout
});

/**CONCCEITOS SOBRE A CRIAÇÃO DE VARIAVEIS
 * 
 * var - Toda variavel criada como var tem por objetivo o escopo global,
 *      ou seja, ela poderá ser utilizada em diversos pontos da programação
 * 
 * let - Toda variavel criada como let, tem por objetivo o escopo local, 
 *      ou seja, será utilizada apenas naquela função
 * 
 * const - Tem por objetivo criar um espaço em memória para armazenar
 *      dados que não sofrem mudanças
 * 
 ******************************************************/

//Função de CallBack para retornar o nome do aluno
entradaDados.question('Digite o nome do aluno(a): \n', function (nome) {
    //Variável local para receber o nome do aluno, que
    //vai ser retronado pela função
    let nomeAluno = nome;


    //Função CallBack para entrada da nota 1
    entradaDados.question('Digite a nota 1: \n', function (nota1) {
        let primeiraNota = Number(nota1);

        entradaDados.question('Digite a nota 2: \n', function (nota2) {
            let segundaNota = Number(nota2);

            entradaDados.question('Digite a nota 3: \n', function (nota3) {
                let terceiraNota = Number(nota3);

                entradaDados.question('Digite a nota 4: \n', function (nota4) {
                    let quartaNota = Number(nota4);
                    let media = 0;
                    media = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota))/4;
                    /***
                     * Conversão de dados String para número
                     * Number.parseInt() ou parseInt() - converte o número para inteiro
                     * Number.parseFloat() ou parseFloat() - converte para real
                     * Number() - converte para int ou foat conforme a entrada de dados
                     * 
                     */

                    if (primeiraNota == '' || segundaNota == '' || terceiraNota == '' || quartaNota == '') {
                        console.log('ERRO: É necessário digitar algum valor na entrada.');

                    } else if (primeiraNota > 10 || segundaNota > 10 || terceiraNota > 10 || quartaNota > 10) {
                        console.log('ERRO! Digite um número menor ou igual a 10');  
                    } else if (primeiraNota < 0 || segundaNota < 0 || terceiraNota < 0 || quartaNota < 0) {
                        console.log('ERRO! Digite um número maior ou igual a zero');   

                    }else if (media < 7) {
                            console.log('Sua média é: ' + media + ' |Você está REPROVADO');      
                    }else if (media >= 7) {
                                console.log('Sua média é: ' + media + ' |Você está APROVADO');      
         
                    }else if (isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)) {
                        console.log('ERRO! Digite um número');  

                    } else {
                       
                        console.log(media);
                    }

                });
            });
        });

    });

});


