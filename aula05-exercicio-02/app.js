/***************************************
 * Objetivo:  Realizar o calculo de uma tabuada, tendo duas entradas a tabuada e o computador
 * Data: 13/02/2023
 * Autor(a): Layla
 * Versão: 1.0 
 */
var tabuadaModel = require('./modulo/tabuada')
var readline = require('readline')
entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Número da tabuada inicial [2 ao 100]: ',
    function(multiplicandoMin) {
        let minMultiplicando = Number(multiplicandoMin)
        if (minMultiplicando == '') {
            console.log('ERRO: A ENTRADA ESTÁ VAZIA')
            entradaDados.close()

        } else if (isNaN(minMultiplicando)) {
            console.log('ERRO: SÓ ACEITAMOS VALORES NÚMERICOS')
            entradaDados.close()

        } else if (minMultiplicando < 2 || minMultiplicando > 100) {
            console.log('ERRO: SÓ ACEITAMOS VALORES ENTRE 2 e 100')
            entradaDados.close()

        } else {
            entradaDados.question('Número da tabuada final [2 ao 100]: ',
                function(multiplicandoMax) {
                    let maxMultiplicando = Number(multiplicandoMax)
                    if (maxMultiplicando == '') {
                        console.log('ERRO:  A ENTRADA ESTÁ VAZIA')
                        entradaDados.close()

                    } else if (isNaN(maxMultiplicando)) {
                        console.log('ERRO: SÓ ACEITAMOS VALORES NÚMERICOS')
                        entradaDados.close()

                    } else if (maxMultiplicando < 2 || maxMultiplicando > 100) {
                        console.log('ERRO: SÓ ACEITAMOS VALORES ENTRE 2 e 100')
                        entradaDados.close()

                    } else {
                        entradaDados.question('Digite o número minímo do multiplicador [1 ao 50]: ',
                            function(multiplicadorMin) {
                                let minMultiplicador = Number(multiplicadorMin)

                                if (minMultiplicador == '') {
                                    console.log('ERRO:  A ENTRADA ESTÁ VAZIA')
                                    entradaDados.close()

                                } else if (isNaN(minMultiplicador)) {
                                    console.log('ERRO: SÓ ACEITAMOS VALORES NÚMERICOS')
                                    entradaDados.close()

                                } else if (minMultiplicador < 1 || minMultiplicador > 50) {
                                    console.log('ERRO: SÓ ACEITAMOS VALORES ENTRE 1 e 50')
                                    entradaDados.close()

                                } else {
                                    entradaDados.question('Digite o número máximo do multiplicador [1 ao 50]: ',
                                        function(multiplicadorMax) {
                                            let maxMultiplicador = Number(multiplicadorMax)

                                            if (maxMultiplicador == '') {
                                                console.log('ERRO:  A ENTRADA ESTÁ VAZIA')
                                                entradaDados.close()

                                            } else if (isNaN(maxMultiplicador)) {
                                                console.log('ERRO: SÓ ACEITAMOS VALORES NÚMERICOS')
                                                entradaDados.close()

                                            } else if (maxMultiplicador < 1 || maxMultiplicador > 50) {
                                                console.log('ERRO: SÓ ACEITAMOS VALORES ENTRE 1 e 50')
                                                entradaDados.close()

                                            } else {
                                                tabuadaModel.tabuada(minMultiplicando, maxMultiplicando, minMultiplicador, maxMultiplicador)
                                                entradaDados.close()
                                            }
                                        })
                                }
                            })
                    }
                })
        }
    })