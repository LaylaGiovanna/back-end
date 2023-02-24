/***************************************
 * Objetivo: Criar um sistema que diferencie números pares e impares
 * Data: 22/02/2023
 * Autor(a): Layla
 * Versão: 1.0 
 */

var parImpar = require('./modulo/parImpar.js');
var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Digite o número inicial (0 - 500): ', function(valorInicial) {
    let valorInicio = valorInicial;

    entradaDados.question('Digite o número final (100 - 1000): ', function(valorFim) {
        let valorFinal = valorFim;

        console.log('\n1- Par, 2- Impar, 3- Par e Impar');
        entradaDados.question('Digite a sua escolha: ', function(escolha) {
            let escolhaUsuario = escolha;

            let resultado = parImpar.parImpar(valorInicio, valorFinal, escolhaUsuario)
        })
    })
})