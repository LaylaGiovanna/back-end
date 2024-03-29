/*********************************************** 
 * Objetivo: API para interagir com Banco de Dados (GET, POST, DELETE E POST)
 * Data: 14/04/2023
 * Autora: Layla Giovanna
 * Versão: 1.0
************************************************/

//import das dependencias do projeto
const express      = require('express');
const cors         = require('cors');
const bodyParser   = require('body-parser');
const { response } = require('express');


//Cria o objeto app utilizando a classe do express
const app = express();


//Configura as permissões do cors
app.use((request, response, next) =>{
    //Permissões de origem da requisição
    response.header('Access-Control-Allow-Origin', '*');

    //Permissões de metodos que serão utilizados na API
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    //Define as permissões para o cors
    app.use(cors());

    //Continua para a leitura dos EndPoints
    next();
});


//CRUD - (Create, Read, Update e Delete)


/************************************************************** 
 * EndPoint: Tabela aluno
 * Versão: 1.0
 * Data: 14/04/2023
**************************************************************/


//EndPoint: Retorna todos os dados de alunos
app.get('/v1/lion-school/aluno', cors(), async function(request, response){


});

//EndPoint: Retorna dados do aluno pelo ID
app.get('/v1/lion-school/aluno/:id', cors(), async function(request, response){
    

});

//EndPoint: Inserir um novo aluno
app.post('/v1/lion-school/aluno', cors(), async function(request, response){
    

});
//EndPoint: Atualiza um aluno pelo id
app.put('/v1/lion-school/aluno/:id', cors(), async function(request, response){
    

});

//EndPoint: Exclui um aluno pelo ID
app.delete('/v1/lion-school/aluno/:id', cors(), async function(request, response){
    

});