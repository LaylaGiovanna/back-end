/***************************************
 * Objetivo: Criar um sistema que gerencie as médias de uma universidade.
 * Data: 10/02/2023
 * Autor(a): Layla
 * Versão: 1.0 
 */


var readline = require('readline')
var calculos = require('./modulo/media')
var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('\n')
console.log('CADASTRO DE ALUNOS')
entradaDados.question('Digite o nome do aluno(a): ', function(nomeDoAluno) {
    let aluno = nomeDoAluno

    entradaDados.question('Digite o sexo do aluno(a): [M | F]: ', function(SexoAluno) {
        let sexoDoAluno = SexoAluno.toUpperCase()

        entradaDados.question('Digite o nome do professor(a): ', function(nomeDoProfessor) {
            let professor = nomeDoProfessor

            entradaDados.question('Digite o sexo do professor(a): [M | F]: ', function(SexoProfessor) {
                let sexoDoProfessor = SexoProfessor.toUpperCase()

                entradaDados.question('Digite o nome do curso: ', function(nomeDoCurso) {
                    let curso = nomeDoCurso

                    entradaDados.question('Digite a disciplina: ', function(nomeDaDisciplina) {
                        let disciplina = nomeDaDisciplina

                        entradaDados.question('PRIMEIRA NOTA: ', function(valor1) {
                            let nota1 = valor1.replace(',', '.')

                            entradaDados.question('SEGUNDA NOTA: ', function(valor2) {
                                let nota2 = valor2.replace(',', '.')

                                entradaDados.question('TERCEIRA NOTA: ', function(valor3) {
                                    let nota3 = valor3.replace(',', '.')

                                    entradaDados.question('QUARTA NOTA: ', function(valor4) {
                                        let nota4 = valor4.replace(',', '.')

                                        let resultado = calculos.calcularMedia(nota1, nota2, nota3, nota4)

                                        if (sexoDoAluno != 'F' && sexoDoProfessor != 'F' &&
                                            sexoDoAluno != 'M' && sexoDoProfessor != 'M') {
                                            console.log('ERRO: SÓ ACEITAMOS M ou F')

                                        } else {
                                            if (nota1 < 0 || nota1 > 100 || isNaN(nota1) ||
                                                nota2 < 0 || nota2 > 100 || isNaN(nota2) ||
                                                nota3 < 0 || nota3 > 100 || isNaN(nota3) ||
                                                nota4 < 0 || nota4 > 100 || isNaN(nota4)) {
                                                console.log('ERRO: A NOTA DEVE SER ENTRE 0 e 100!')
                                                entradaDados.close()

                                            } else {
                                                if (aluno == '' || professor == '' || sexoDoAluno == '' || sexoDoProfessor == '' ||
                                                    curso == '' || disciplina == '' || nota1 == '' || nota2 == '' || nota3 == '' ||
                                                    nota4 == '') {
                                                    console.log('ERRO: ENTRADAS VAZIAS')
                                                    entradaDados.close()

                                                } else {
                                                    if (resultado < 50) {
                                                        console.log('\n-------------------Relatório-------------------\n')
                                                        if (sexoDoAluno == 'F')
                                                            console.log(`A ALUNA ${aluno} FOI REPROVADA NA DISCIPLINA ${disciplina}.`)
                                                        else
                                                            console.log(`O ALUNO ${aluno} FOI REPROVADO NA DISCIPLINA ${disciplina}.\n`)
                                                        console.log(`CURSO: ${ curso }`)
                                                        if (sexoDoProfessor == 'F') {
                                                            console.log(`PROFESSORA: ${ professor }\n`)
                                                        } else
                                                            console.log(`PROFESSOR: ${ professor }`)
                                                        console.log(`NOTAS DA ALUNA: ${ nota1 }, ${ nota2 }, ${ nota3 }, ${ nota4 }`)
                                                        console.log(`MÉDIA FINAL: ${resultado}`)
                                                        entradaDados.close()

                                                    } else if (resultado >= 70) {
                                                        console.log('\n-------------------Relatório-------------------\n')
                                                        if (sexoDoAluno == 'F')
                                                            console.log(`A ALUNA ${aluno} FOI APROVADA NA DISCIPLINA ${disciplina}.`)
                                                        else
                                                            console.log(`O ALUNO ${aluno} FOI APROVADO NA DISCIPLINA ${disciplina}.\n`)
                                                        console.log(`CURSO: ${ curso }`)
                                                        if (sexoDoProfessor == 'F')
                                                            console.log(`PROFESSORA: ${ professor }\n`)
                                                        else
                                                            console.log(`PROFESSOR: ${ professor }`)
                                                        console.log(`NOTAS DO ALUNO: ${ nota1 }, ${ nota2 }, ${ nota3 }, ${ nota4 }`)
                                                        console.log(`MÉDIA DO ALUNO: ${resultado}`)
                                                        entradaDados.close()

                                                    } else {
                                                        entradaDados.question('NOTA DO EXAME:\n', function(valorExame) {
                                                            let notaDoExame = valorExame
                                                            let resultadoExame = calculos.calcularMediaExame(resultado, notaDoExame)

                                                            if (resultadoExame == '' || resultadoExame < 0 || resultadoExame > 100 || isNaN(notaDoExame)) {
                                                                console.log('ERRO: A NOTA PRECISA SER ENTRE 0 e 100!')
                                                                entradaDados.close()
                                                            } else {
                                                                if (resultadoExame < 50) {
                                                                    console.log('\n-------------------Relatório-------------------\n')
                                                                    if (sexoDoAluno == 'F')
                                                                        console.log(`A ALUNA ${aluno} FOI REPROVADO PELO EXAME NA DISCIPLINA ${disciplina}.`)
                                                                    else
                                                                        console.log(`O ALUNO ${aluno} FOI REPROVADO PELO EXAME NA DISCIPLINA ${disciplina}.`,
                                                                            `CURSO: ${ curso }`)
                                                                    if (sexoDoProfessor == 'F')
                                                                        console.log(`PROFESSORA: ${ professor }`)
                                                                    else
                                                                        console.log(`PROFESSOR: ${ professor }`)
                                                                    console.log(`NOTAS DO ALUNO: ${ nota1 }, ${ nota2 }, ${ nota3 }, ${ nota4 }, Exame: ${notaDoExame}`)
                                                                    console.log(`MÉDIA FINAL: ${resultado}`)
                                                                    console.log(`MÉDIA FINAL DO EXAME: ${resultadoExame}`)
                                                                    entradaDados.close()

                                                                } else {
                                                                    console.log('\n-------------------Relatório-------------------\n')

                                                                    if (sexoDoAluno == 'F')
                                                                        console.log(`A ALUNA ${aluno} FOI APROVADA PELO EXAME NA DISCIPLINA ${disciplina}`)
                                                                    else
                                                                        console.log(`O ALUNO ${aluno} FOI APROVADO PELO EXAME NA DISCIPLINA ${disciplina}`)
                                                                    console.log(`CURSO: ${ curso }`)
                                                                    if (sexoDoProfessor == 'F')
                                                                        console.log(`PROFESSORA: ${ professor }`)
                                                                    else
                                                                        console.log(`PROFESSOR: ${ professor }`)
                                                                    console.log(`NOTAS DO ALUNO: ${ nota1 }, ${ nota2 }, ${ nota3 }, ${ nota4 }, Exame: ${notaDoExame}`)
                                                                    console.log(`MÉDIA FINAL: ${resultado}`)
                                                                    console.log(`MÉDIA FINAL DO EXAME: ${resultadoExame}`)
                                                                    entradaDados.close()
                                                                }
                                                            }
                                                        })
                                                    }
                                                }
                                            }
                                        }
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})