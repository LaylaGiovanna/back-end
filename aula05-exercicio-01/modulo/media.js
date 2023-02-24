/***************************************
 * Objetivo: Criar um sistema que gerencie as médias de uma universidade.
 * Data: 10/02/2023
 * Autor(a): Layla
 * Versão: 1.0 
 */
const calcularMediaExame = function(media, valorExame) {
    let mediaExame = media
    let notaExame = valorExame
    let resultadoFinal = (Number(mediaExame) + Number(notaExame)) / 2

    return resultadoFinal
}

const calcularMedia = function(valor1, valor2, valor3, valor4) {
    let nota1 = valor1
    let nota2 = valor2
    let nota3 = valor3
    let nota4 = valor4
    let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4

    return media
}

module.exports = { calcularMedia, calcularMediaExame }