/*********************************************** 
 * Objetivo: Realizar a interação do Aluno com o Banco de Dados
 * Data: 14/04/2023
 * Autora: Layla Giovanna
 * Versão: 1.0
 ************************************************/


//Inserir um novo registro do Banco de Dados
const insertAluno = function(dadosAluno) {

    }
    //Atualizar um registro do Banco de Dados
const updateAluno = function(dadosAluno) {

    }
    //Excluir um registro do Banco de Dados
const deleteAluno = function(id) {

}

//Retorna todos os registros do Banco de Dados
const selectAllAluno = async function() {
    //Import da biblioteca do prisma Client (Responsável por manipular dados do BD)
    const { PrismaClient } = require('@prisma/client');

    //Instancia da classe do PrismaClient
    const prisma = new PrismaClient();

    //Variável com scriptSQL para executar no BD
    let sql = 'select * from tbl_aluno';

    //Executa no BD o scriptSQL
    //$queryRawUnsafe() - é utilzado quando o scriptSQL está em uma variável
    //$queryRaw()       - é utilizado quano passar o script direto do método 
    //                      (Ex: $queryRawUnsafe('select * from tbl_aluno');)
    let rsAluno = await prisma.$queryRawUnsafe(sql);

    //valida se o BD retornou algum registro
    if (rsAluno.length > 0)
        return rsAluno;
    else
        return false;

}

//Retorna um registro filtrado pelo ID do Banco de Dados
const selectByIdAluno = function(id) {

}

module.exports = {
    selectAllAluno
}