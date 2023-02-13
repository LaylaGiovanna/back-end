/***************************************
 * Objetivo: Criar um sistema que gerencie as médias escolares de uma universidade.
 * Data: 10/02/2023
 * Autor(a): Layla
 * Versão: 1.0 
 */



const calcularMedia = function (primeiraNota, segundaNota, terceiraNota, quartaNota, exameRecuperacao, nomeAluno, nomeProfessor, sexoAluno, sexoProfessor, nomeCurso, nomeDisciplina) {
    //informações
    let nomeAluno = nome;
    let nomeProfessor = nome;
    let sexoAluno = sexoAluno.toUpperCase();
    let sexoProfessor = sexoProfessor.toUpperCase();
    let nomeCurso = curso;
    let nomeDisciplina = disciplina;

    //notas
    let primeiraNota = Number(nota1);
    let segundaNota = Number(nota2);
    let terceiraNota = Number(nota3);
    let quartaNota = Number(nota4);

    let media = 0;
    let exameRecuperacao = Number(exameRecuperacao);
    let relatorioFem;
    let relatorioMasc;

    //ARRUMAR ESSA PARTE
    const media = (nota1, nota2, nota3, nota4) => (nota1 + nota2 + nota3 + nota4) / 4;

    


    // Validação para tratar entradas vazias
    if (primeiraNota == '' || segundaNota == '' || terceiraNota == '' || quartaNota == '') {
        console.log('Erro: é necessário digitar algum valor nas entradas.')
        // Validação para entrada de dados não numéricos
    } else if (isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota) || isNaN(quartaNota)) {
        console.log('É necessário que todos os dados digitados sejam números.')
        // Validação de entrada de valores entre 0 e 100
    } else if (primeiraNota > 100 || primeiraNota < 0 || segundaNota > 100 || segundaNota < 0 ||
        terceiraNota > 100 || terceiraNota < 0 || quartaNota > 100 || quartaNota < 0 || exameRecuperacao > 100 || exameRecuperacao < 0) {
        console.log('Erro: digite números validos.');
    } else {
        media = (parseFloat(primeiraNota) + parseFloat(segundaNota) + parseFloat(terceiraNota) + parseFloat(quartaNota)) / 4;

        //temos que adicionar a parte do exame final dps e mudar essa parte da media
        console.log('Média final: ' + media.toFixed(1));

        function resultado() {
            if (media >= 70) {
                console.log('Status do aluno: APROVADO');
            } else if (media >= 50 && media <= 69) {
                //console.log('Você terá que fazer o exame de recuperação!');
                console.log('Digite a nota do exame final: ')
                (media + exameFinal ) / 2
            } /* else {
                //console.log('Status do aluno: ' + re);
            } */
        }
    }



    //validação de feminino
  /*   function relatorioFem(nomeAluno, sexoAluno, nomeProfessor, sexoProfessor, NomeCurso, NomeDisciplina, numero1, numero2, numero3, numero4) {
        if (sexoAluno == 'feminino' && sexoProfessor == 'feminino') {
            console.log('A aluna ' + nomeAluno + 'foi ' + resultado + ' na disciplina. \n' + nomeDisciplina + 'Curso: \n' + nomeCurso)
        } else {
            console.log('Professora: \n' + nomeProfessor + 'Notas da aluna:' + nota1 + ', ' + nota2 + ', ' + nota3 + 'e ' + nota4 + 'Média Final: ' + media)
        }
    }
    //validação de masculino
    function relatorioMasc(nomeAluno, sexoAluno, nomeProfessor, sexoProfessor, NomeCurso, NomeDisciplina, numero1, numero2, numero3, numero4) {
        if (sexoAluno == 'masculino' && sexoProfessor == 'masculino') {
            console.log('O aluno ' + nomeAluno + 'foi ' + resultado + ' na disciplina. \n' + nomeDisciplina + 'Curso: \n' + nomeCurso)
        } else {
            console.log('Professor: \n' + nomeProfessor + 'Notas da aluna:' + nota1 + nota2 + nota3 + nota4 + 'Média Final: ' + media)
        }
    } */


};

module.exports = {
    calcular
}
