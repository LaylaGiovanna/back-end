/************************
 * Objetivo: Implementa a regra de negócio entre o app e a model
 * Data: 14/04/2023
 * Autor: Layla Giovanna
 * Versão: 1.0
 *************************/

//funçao p receber os dados do app e enviar p model p INSERIR um novo item
const inserirAluno = function(dadosAluno) {

}

//funçao p receber os dados do app e enviar p model p ATUALIZAR um novo item
const atualizarAluno = function(dadosAluno) {

}

//funçao p receber os dados do app e enviar p model p DELETAR um novo item
const deletarAluno = function(id) {

}

//funçao p retornar todos os itens da tabela recebidos da model
const selecionarTodosAlunos = async function() {

    //Import do arquivo de acesso ao BD
    let alunoDAO = require('../model/DAO/alunoDAO.js')

    //Solicita ao DAO todos os alunos do BD
    let dadosAluno = await alunoDAO.selectAllAluno();

    //Cria um objeto do tipo JSON
    let dadosJSON = {};


    //Valida se o banco de dados teve registro
    if (dadosAluno) {
        //Se teve adiciona o array de alunos e um JSON para retornar ao app
        dadosJSON.alunos = dadosAluno;
        return dadosJSON;
    } else {
        //Senão, retorna falso
        return false;
    }
};

//funçao p buscar um item buscando pelo id
const buscarIdAluno = function(id) {

}

module.exports = {
    selecionarTodosAlunos
}