/***************
 * Objetivo: Realizar calculos matematicos (SOMA, SUBTRAÇÃO, MULTIPLICAÇÃO E DIVISÃO)
 * Data: 03/02/2023
 * Autora: Layla
 * Versão: 1.0
*/

console.log('Sistema de Cálculo');

var matematica = require('./modulo/calculadora.js.js')
//import da biblioteca
var readline = require('readline');
const { stdin, stdout } = require('process');

//cria um objeto para a entrada de dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//entrada de dados valor 1
entradaDados.question('Valor1: \n', function (numero1) {
    let valor1 = numero1.replace(',' , '.')

    //entrada de dados valor 2
    entradaDados.question('Valor2: \n', function (numero2) {
        let valor2 = numero2.replace(',' , '.')

        entradaDados.question('Esolha a operação: [SOMAR | SUBTRAIR | MULTIPLICAR | DIVIDIR]: \n', function (tipoCalculo) {
            //toUpperCase - Converte uma string para MAIÚSCULO
            //toLowerCase - Converte uma string para minúsculo
            let operacao = tipoCalculo.toUpperCase();
            let reultado;

            //podemos usar utilizar o isNaN ou typeof
            //se usar o typeof precisa garantir que o tipo de dados não é genérico (String)
            //else if(typeof(valor1) != 'number'|| typeof(valor2) != 'number')

            if(valor1 == '' || valor2 == '' || operacao == '' ){
                console.log('ERRO: Não é possível calcular sem preencher todos os dados.')
            }else if(isNaN(valor1) || isNaN(valor2)){
                console.log('ERRO: Não é possível calcular sem a entrada de valores numéricos.')
            }
            

            else{
                resultado = matematica.calcular(valor1, valor2, operacao);
                console.log(resultado);
            }
        })
    })
})
