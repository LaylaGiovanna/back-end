/*********************************************** 
 * Objetivo: Realizar a interação do Aluno com o Banco de Dados
 * Data: 14/04/2023
 * Autora: Layla Giovanna
 * Versão: 1.0
 ************************************************/

/***************************DEIXAMOS AQUI POIS USAREMOS EM TODOS***************************/
//Import da biblioteca do prisma Client (Responsável por manipular dados do BD)
const { PrismaClient } = require('@prisma/client');
//Instancia da classe do PrismaClient
const prisma = new PrismaClient();



//Inserir um novo registro do Banco de Dados
const insertAluno = async function(dadosAluno) {
        //ScriptSQL para inserir os dados no BD
        let sql = `insert into tbl_aluno(
                                    nome, 
                                    cpf, 
                                    rg, 
                                    data_nascimento, 
                                    email
                                    )
                                    values
                                    (
                                    '${dadosAluno.nome}',
                                    '${dadosAluno.cpf}',
                                    '${dadosAluno.rg}',
                                    '${dadosAluno.data_nascimento}',
                                    '${dadosAluno.email}'
                                    )`;

        // console.log(sql);
        

        //Executa o scriptSQL no banco de dados e recebemos o retorno se deu certo ou não
        let result = await prisma.$executeRawUnsafe(sql);

        console.log(result);
        

        if (result)
            return true;
        else
            return false;

    }
    //Atualizar um registro do Banco de Dados
const updateAluno = function(dadosAluno) {

    }
    //Excluir um registro do Banco de Dados
const deleteAluno = function(id) {

}

//Retorna todos os registros do Banco de Dados
const selectAllAluno = async function() {
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
    selectAllAluno,
    insertAluno
}