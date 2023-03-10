/***************************************
 * Objetivo: Criar uma API para a minipulação de dados de Estados e Cidades
 * Data: 10/03/2023
 * Autor(a): Layla
 * Versão: 1.0
 */

/****************************************EXPLICAÇÃO****************************************
 * Express - dependencia do Node, que permite a integração entre o protocoo HTTP com o código
 *           npm install express --save
 *
 * Cors - gerenciador de permissões para o protocolo HTTP
 *        npm install cors --save
 *
 * Body-parser - dependencia que permite manipular dados enviados pelo body da requisição
 *               npm install body-parser --save
 */



/* Import das dependencias para criar a API */

//responsavel pelas requisições
const express = require('express');
//resposável pelas permissões das requisições
const cors = require('cors');
//responsável pela manipulação do body da requisição
const bodyParser = require('body-parser');


//cria um objeto com as informações da classe express
const app = express();

app.use((request, response, next) => {
    //Permite gerenciar a origem das requisições da API
    //'*' - de qualquer lugar (PUBLICA)
    //'200.100.0.45' - de um IP especifico, responderá somente aquela maquina (PRIVADA)
    response.header('Access-Control-Allow-Origin', '*')

    //verbos(methods) que poderão ser usados como requisição
    response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')

    //ativa no cors das requisições as permissões estabelecidas
    app.use((cors));

    next();
});


//endPoints, cors, async(requisição asíncrona)

//endPoint para Listar os Estados
app.get('/estados', cors(), async function(request, response, next) {

    const estadosCidades = require('./modulo/estados_cidades.js')

    let listaDeEstados = estadosCidades.getListaDeEstados();

    response.json(listaDeEstados);
    response.status(200);

});


//permite carregar os endPoint criados e aguardar as requisições
//pelo protocolo HTTP na porta 8080
app.listen(8080, function() {
    console.log('Servidor aguardando requisições na porta 8080.')
});