/***************************************
 * Objetivo: Criar um sistema que gerencie as médias de uma universidade.
 * Data: 10/02/2023
 * Autor(a): Layla
 * Versão: 1.0 
 */

const calcularMedia = function (nota1, nota2, nota3, nota4) {
    let nota1 = Number(valor1);
    let nota2 = Number(valor2);
    let nota3 = Number(valor3);
    let nota4 = Number(valor4);

    let resultado = ((nota1 + nota2 + nota3 + nota4) / 4);
    return resultado
}

const calcularMediaExame = function (media, valorExame) {

    let valorExame = notaExame;
    let mediaExame = media;
    let resultadoExame = (Number(mediaExame) + Number(notaExame)) / 2

    return resultadoExame
}


module.exports = {
    calcularMedia,
    calcularMediaExame
}
