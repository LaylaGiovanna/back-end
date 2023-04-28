/************************
 * Objetivo: Implementa a regra de negócio entre o app e a model
 * Data: 14/04/2023
 * Autor: Layla Giovanna
 * Versão: 1.0
 *************************/

//Import do arquivo de acesso ao BD
var alunoDAO = require('../model/DAO/alunoDAO.js')

//funçao p receber os dados do app e enviar p model p INSERIR um novo item
const inserirAluno = async function (dadosAluno) {
    //Import do arquivo global de configurações do projeto
    let message = require('./modulo/config.js')

    if (
        dadosAluno.nome             == ''   || dadosAluno.nome == undefined            || dadosAluno.nome.length     > 100  ||
        dadosAluno.cpf              == ''   || dadosAluno.cpf == undefined             || dadosAluno.cpf             > 18   ||
        dadosAluno.rg               == ''   || dadosAluno.rg == undefined              || dadosAluno.rg              > 15   ||
        dadosAluno.data_nascimento  == ''   || dadosAluno.data_nascimento == undefined || dadosAluno.data_nascimento > 10   ||
        dadosAluno.email            == ''   || dadosAluno.email == undefined           || dadosAluno.email           > 250
    ){
        return message.ERROR_REQUIRED_DATA;
    }else{
        //Envia os dados para a model a serem inseridos no BD
        let status = await alunoDAO.insertAluno(dadosAluno);

        // console.log(status)
        if(status)
            return message.CREATED_ITEM;
        else
        return   message.ERROR_INTERNAL_SERVER;
    }

}

//funçao p receber os dados do app e enviar p model p ATUALIZAR um novo item
const atualizarAluno = function (dadosAluno) {

}

//funçao p receber os dados do app e enviar p model p DELETAR um novo item
const deletarAluno = function (id) {

}

//funçao p retornar todos os itens da tabela recebidos da model
const selecionarTodosAlunos = async function () {
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
const buscarIdAluno = function (id) {

}

module.exports = {
    selecionarTodosAlunos,
    inserirAluno
}