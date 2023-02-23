/***************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade.
 * Data: 10/02/2023
 * Autor(a): Layla
 * Versão: 1.0 
 */

console.log('\n ---------------Sistema de Calculo de Medias Universitárias--------------- \n');

//Import da biblioteca da calculadora (criado por nos)
var calcular = require('./modulo/medias.js');

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
    let nomeAluno = nome

    entradaDados.question('Sexo do aluno [FEMININO | MASCULINO]: \n', function (sexoAluno) {
        let sexoAluno = sexo1.toUpperCase()

        entradaDados.question('Nome do professor: \n', function (nomeProfessor) {
            let nomeProfessor = nome

            entradaDados.question('Sexo do professor [FEMININO | MASCULINO]: \n', function (sexoProfessor) {
                let sexoProfessor = sexo.toUpperCase()


                entradaDados.question('Nome do curso: \n', function (nomeCurso) {
                    let curso = nomeCurso
                    entradaDados.question('Nome da disciplina: \n', function (nomeDisciplina) {
                        let disciplina = nomeDisciplina

                        console.log('\n-------------------Notas-------------------\n')

                        entradaDados.question('Digite a nota 1: \n', function (nota1) {
                            let nota1 = valor1.replace(',', '.')

                            entradaDados.question('Digite a nota 2: \n', function (nota2) {
                                let nota2 = valor1.replace(',', '.')

                                entradaDados.question('Digite a nota 3: \n', function (nota3) {
                                    let nota3 = valor1.replace(',', '.')

                                    entradaDados.question('Digite a nota 4: \n', function (nota4) {
                                        let nota4 = valor1.replace(',', '.')

                                        let resultado = calcular.calcularMedia(nota1, nota2, nota3, nota4)



                                        //tratativa de erros
                                        if (sexoAluno != 'FEMININO' && sexoProfessor != 'FEMININO' &&
                                            sexoAluno != 'MASCULINO' && sexoProfessor != 'MASCULINO') {
                                            console.log('ERRO: Por favor, digite apenas MASCULINO ou FEMININO')
                                        } else if (nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '') {
                                            console.log('ERRO: É necessário digitar algum valor na entrada.');
                                            entradaDados.close()
                                        } else if (nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100) {
                                            console.log('ERRO! Digite um número menor ou igual a 100');
                                        } else if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0) {
                                            console.log('ERRO! Digite um número maior ou igual a zero');
                                        } else if (media >= 50 && media <= 69) {
                                            entradaDados.question('Digite a nota do exame final.\n')
                                            let notaExame = Number(exameFinal);
                                            media = (media + exameFinal) / 2
                                            return resultado
                                        } else if (aluno == '' || professor == '' || sexoAluno == '' || sexoProfessor == '' || curso == '' || disciplina == '' || nota_1 == '' || nota_2 == '' || nota_3 == '' || nota_4 == '') {
                                            console.log('ERRO: É necessário preencher todos os dados para ser gerado o relatório corretamente!')
                                            entradaDados.close()
                                        }

                                        else {
                                            if (resultado < 50) {
                                                console.log('\n-------------------Relatório-------------------\n')
                                                if (sexoAluno == 'FEMININO')
                                                    console.log(`A aluna ${aluno} foi reprovada na disciplina ${disciplina}.`)
                                                else
                                                    console.log(`O aluno ${aluno} foi reprovado na disciplina ${disciplina}.`,
                                                        `Curso: ${curso}`)
                                                if (sexoProfessor == 'FEMININO') {
                                                    console.log(`Professora: ${professor}`)
                                                } else
                                                    console.log(`Professor: ${professor}`,
                                                        `Notas da aluna: ${nota_1}, ${nota_2}, ${nota_3}, ${nota_4}`,
                                                        `Média Final: ${resultado}`)
                                                entradaDados.close()
                                            }

                                            else if (media >= 70) {
                                                console.log('\n-------------------Relatório-------------------\n')

                                                if (sexoAluno == 'FEMININO')
                                                    console.log(`A aluna ${aluno} foi APROVADA na disciplina ${disciplina}.`)
                                                else
                                                    console.log(`O aluno ${aluno} foi APROVADO na disciplina ${disciplina}.`,
                                                        `Curso: ${curso}`)

                                                if (sexoProfessor == 'FEMININO')
                                                    console.log(`Professora: ${professor}`)
                                                else
                                                    console.log(`Professor: ${professor}`,
                                                        `Notas do aluno: ${nota_1}, ${nota_2}, ${nota_3}, ${nota_4}`,
                                                        `Média Final: ${resultado}`)
                                                entradaDados.close()

                                            } else {
                                                entradaDados.question('Digite a nota do exame:\n', function (valorExame) {
                                                    let valorExame = notaExame
                                                    let resultadoExame = calcular.calcularMediaExame(resultado, notaExame)

                                                    if (resultadoExame == '' || resultadoExame < 0 || resultadoExame > 100 || isNaN(notaExame)) {
                                                        console.log('ERRO: É preciso digitar um NÚMERO entre 0 e 100!')
                                                        entradaDados.close()
                                                    } else {
                                                        if (resultadoExame < 50) {
                                                            console.log('\n-------------------Relatório-------------------\n')
                                                            console.log('\n')
                                                            if (sexoAluno == 'FEMININO')
                                                                console.log(`A aluna ${aluno} foi REPROVADO pelo exame na disciplina ${disciplina}.`)
                                                            else
                                                                console.log(`O aluno ${aluno} foi REPROVADO pelo exame na disciplina ${disciplina}.`,
                                                                    `Curso: ${curso}`)
                                                            if (sexoProfessor == 'FEMININO')
                                                                console.log(`Professora: ${professor}\n`)
                                                            else
                                                                console.log(`Professor: ${professor}\n`,
                                                                    `Notas do aluno: ${nota_1}, ${nota_2}, ${nota_3}, ${nota_4}, Exame: ${notaExame}\n`,
                                                                    `Média Final: ${resultado}`,
                                                                    `Média final Exame: ${resultadoExame}`)
                                                            entradaDados.close()

                                                        } else {
                                                            console.log('\n-------------------Relatório-------------------\n')
                                                            console.log('\n')
                                                            if (sexoAluno == 'FEMININO')
                                                                console.log(`A aluna ${aluno} foi APROVADA pelo exame na disciplina ${disciplina}.`)
                                                            else
                                                                console.log(`O aluno ${aluno} foi APROVADO pelo exame na disciplina ${disciplina}.`,
                                                                    `Curso: ${curso}\n`)
                                                            if (sexoProfessor == 'FEMININO')
                                                                console.log(`Professora: ${professor}\n`)
                                                            else
                                                                console.log(`Professor: ${professor}\n`,
                                                            `Notas do aluno: ${nota_1}, ${nota_2}, ${nota_3}, ${nota_4}, Exame: ${notaExame}\n`,
                                                            `Média Final: ${resultado}`,
                                                            `Média final Exame: ${resultadoExame}`)
                                                            entradaDados.close()

                                                        }

                                                    }
                                                }
                                                

                                            }
                                        }
                                                  

                             

                          

                        

                   

                

            
