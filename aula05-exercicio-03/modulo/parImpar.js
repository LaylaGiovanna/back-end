/***************************************
 * Objetivo: Criar um sistema que diferencie números pares e impares
 * Data: 22/02/2023
 * Autor(a): Layla
 * Versão: 1.0 
 */

function parImpar(valorInicio, valorFinal, escolhaUsuario) {
    let escolha = escolhaUsuario
    let valorFim = valorFinal
    let valorInicial = valorInicio
    let quantidadeImpar = 0;
    let quantidadePar = 0;

    if (valorInicial == '' || valorFim == '' || escolha == '') {
        console.log('ERRO: ENTRADA VAZIA');

    } else if (isNaN(valorInicial) || isNaN(valorFim) || isNaN(escolha)) {
        console.log('ERRO: A ENTRADA SÓ ACEITA NÚMEROS');

    } else if (valorInicial < 0 || valorInicial > 500) {
        console.log('ERRO: O NÚMERO INICIAL DEVE SER ENTRE 0 e 500.');

    } else if (valorFim < 100 || valorFim > 1000) {
        console.log('ERRO: O NÚMERO FINAL DEVE SER ENTRE 100 e 1000.');

    } else if (valorInicial >= valorFim) {
        console.log('ERRO: O NÚMERO INICIAL NÃO PODE SER MAIOR OU IGUAL AO NÚMERO FINAL.');

    } else {
        if (Number(escolha) == 1) {
            console.log('\nLista de números pares:')
            for (contador = Number(valorInicial); contador <= Number(valorFim); contador++) {
                if (contador % 2 == 0) {
                    console.log(contador);
                    quantidadePar++;
                }
            }
            console.log('Quantidade de números pares: ' + quantidadePar);

        } else if (Number(escolha) == 2) {
            console.log('\nLista de números impares:')
            for (contador = Number(valorInicial); contador <= Number(valorFim); contador++) {
                if (contador % 2 == 1) {
                    console.log(contador);
                    quantidadeImpar++;
                }
            }
            console.log('Quantidade de números impares: ' + quantidadeImpar);

        } else if (Number(escolha) == 3) {
            console.log('\nLista de números pares e impares')
            for (contador = Number(valorInicial); contador <= Number(valorFim); contador++) {
                if (contador % 2 == 0) {
                    console.log('Par: ' + contador);
                    quantidadePar++;
                } else if (contador % 2 == 1) {
                    console.log('Impar: ' + contador);
                    quantidadeImpar++;
                }
            }
            console.log('Total de pares: ' + quantidadePar);
            console.log('Total de impares: ' + quantidadeImpar);
        }
    }
}
module.exports = {
    parImpar
}