/************************************************************************************************
 * Objetivo: Este arquivo configura mensagens e statusCode de todo o projeto (ESCOPO GLOBAL), com variáveis e constantes
 * Data: 28/04/2023
 * Autor: Layla Giovanna
 * Versão: 1.0
 *************************************************************************************************/

//quando se cria uma constante que não sofrerá mudança, criamos com letra maiúscula**************


/********************************************* Constantes de ERROS *********************************************/
const ERROR_REQUIRED_DATA = {status: 400 , message: 'Existem dados obrigatórios que não foram preenchidos.'};
const ERROR_INTERNAL_SERVER = {status: 500 , message: 'Erro interno no servidor de banco de dados.'};


/********************************************* Constantes de SUCESSO *********************************************/
const CREATED_ITEM = {status: 201 , message: 'Registro criado com sucesso.'};

module.exports = {
    ERROR_REQUIRED_DATA,
    ERROR_INTERNAL_SERVER,
    CREATED_ITEM
}




