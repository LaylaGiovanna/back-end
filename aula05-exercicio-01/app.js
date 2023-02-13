/***************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade.
 * Data: 10/02/2023
 * Autor(a): Layla
 * Versão: 1.0 
 */

console.log('Sistema de Calculo de Medias Universitárias \n');

//Import da biblioteca da calculadora (criado por nos)
//var calcular = require('./modulo/medias.js');

//Import da biblioteca para entrada de dados
var readline = require('readline')
const { stdin, stdout } = require('process');

//Criamos um objeto para manipular a entrada de dados via teclado
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: stdout
});

//Função de CallBack para retornar o nome do aluno, do professor e sexo de ambos
entradaDados.question('Nome do aluno: \n', function (nomeAluno) {

    entradaDados.question('Sexo do aluno [FEMININO | MASCULINO]: \n', function (sexoAluno) {
        if (sexoAluno == 'feminino') {
            console.log('relatorioFem');

        } else if (sexoAluno == 'masculino') {
            console.log('tchau');
        }

        entradaDados.question('Nome do professor: \n', function (nomeProfessor) {

            entradaDados.question('Sexo do professor [FEMININO | MASCULINO]: \n', function (sexoProfessor) {
                if (sexoProfessor == 'feminino') {
                    console.log('oi');

                } else if (sexoProfessor == 'masculino') {
                    console.log('tchau');
                }

                entradaDados.question('Nome do curso: \n', function (NomeCurso) {

                    entradaDados.question('Nome da disciplina: \n', function (NomeDisciplina) {

                        entradaDados.question('Digite a nota 1: \n', function (numero1) {

                            entradaDados.question('Digite a nota 2: \n', function (numero2) {

                                entradaDados.question('Digite a nota 3: \n', function (numero3) {

                                    entradaDados.question('Digite a nota 4: \n', function (numero4) {

                                    });

                                });

                            });

                        });

                    });

                });

            });

        });

    });

});