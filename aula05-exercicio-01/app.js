/***************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade.
 * Data: 10/02/2023
 * Autor(a): Layla
 * Versão: 1.0 
 */

console.log('\n ---------------Sistema de Calculo de Medias Universitárias--------------- \n');

//Import da biblioteca da calculadora (criado por nos)
var calcularMedia = require('./modulo/medias.js');

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
        /* if (sexoAluno == 'feminino') {
            console.log('relatorioFem');

        } else if (sexoAluno == 'masculino') {
            console.log('tchau');
        } */

        entradaDados.question('Nome do professor: \n', function (nomeProfessor) {

            entradaDados.question('Sexo do professor [FEMININO | MASCULINO]: \n', function (sexoProfessor) {
                /* if (sexoProfessor == 'feminino') {
                    console.log('oi');

                } else if (sexoProfessor == 'masculino') {
                    console.log('tchau');
                } */

                entradaDados.question('Nome do curso: \n', function (nomeCurso) {
                    entradaDados.question('Nome da disciplina: \n', function (nomeDisciplina) {
                        
                        entradaDados.question('Digite a nota 1: \n', function (nota1) {
                            let primeiraNota = Number(nota1);

                            entradaDados.question('Digite a nota 2: \n', function (nota2) {
                                let segundaNota = Number(nota2);
                                entradaDados.question('Digite a nota 3: \n', function (nota3) {
                                    let terceiraNota = Number(nota3);
                                    entradaDados.question('Digite a nota 4: \n', function (nota4) {
                                        let quartaNota = Number(nota4);
                                        let media = 0;
                                        let resultado;
                                        media = (Number(primeiraNota) + Number(segundaNota) + Number(terceiraNota) + Number(quartaNota))/4;
                                        

                                        //tratativa de erros
                                        if (primeiraNota == '' || segundaNota == '' || terceiraNota == '' || quartaNota == '') {
                                            console.log('ERRO: É necessário digitar algum valor na entrada.');
                                        } else if (primeiraNota > 100 || segundaNota > 100 || terceiraNota > 100 || quartaNota > 100) {
                                            console.log('ERRO! Digite um número menor ou igual a 100');  
                                        } else if (primeiraNota < 0 || segundaNota < 0 || terceiraNota < 0 || quartaNota < 0) {
                                            console.log('ERRO! Digite um número maior ou igual a zero');   
                                        }else if (media >= 50 && media <= 69){
                                            entradaDados.question('Digite a nota do exame final.\n')
                                            let notaExame = Number(exameFinal);
                                            media = (media + exameFinal ) / 2 
                                            return resultado
                                        }else if (resultado <50) {
                                                console.log('Sua média é: ' + media + ' |Você está REPROVADO');      
                                        }else if (media >= 70) {
                                                    console.log('Sua média é: ' + media + ' |Você está APROVADO');      
                                        } else {
                                            console.log('Média final: ' + media.toFixed(1));
                                           
                                            //console.log(media);
                                        }
                                        
                                        /* if(media >= 70){
                                            console.log('Parabens! Aluno aprovado.\n')
                                        }else if (media >= 50 && media <= 69){
                                            entradaDados.question('Digite a nota do exame final.\n')
                                                var resultado = (media + exameFinal ) / 2 
                                        }else if(resultado >=60) { 
                                            console.log('Status: Reprovado!!')
                                        }else {
                                            console.log('Status: Aprovado!! Parabéns')
                                        } */
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