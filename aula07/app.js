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

//import do arquivo de funcoes
const estadosCidades = require('./modulo/estados_cidades.js')


//cria um objeto com as informações da classe express
const app = express();


//define as permissões no header da API
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

/* ************************FUNÇÃO 1************************ */
//endPoint para Listar os Estados
app.get('/listaEstados', cors(), async function(request, response, next) {



    //chama a funcao que retorna os estados
    let listaDeEstados = estadosCidades.getListaDeEstados();
    //tratamento p validar se a funçao validou o processamento
    if (listaDeEstados) {
        //retorna o json e o status code
        response.json(listaDeEstados);
        response.status(200);
    } else {
        response.status(500);
    }
});


/* ************************FUNÇÃO 2************************ */
//endpoint: Lista as caracteristicas do estado pela sigla
//1° nome é oq retorna e depois o nome
app.get('/dadosEstado/sigla/:uf', cors(), async function(request, response, next) {
    //:uf - é uma variável que será utilizada paraa passagem de valores, 
    //na URL da requisição

    //recebe o valor da variável uf que será encaminhada 
    //na URL da requisição
    let siglaEstado = request.params.uf;
    let statusCode;
    let dadosEstado = {};

    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        dadosEstado.message = "nao é possivel processar a requisição pois a sigla do estado nao foi informada ou nao atende a quantidade de caracteres (2 digitos)";
        statusCode = 400;
    } else {
        //chama a função que filtra o estado pela sigla 
        let estado = estadosCidades.getDadosEstados(siglaEstado)

        //valida se houve retorno válido da função
        if (estado) {
            dadosEstado = estado; //Estado encontrado
            statusCode = 200;
        } else {
            statusCode = 404; //Estado não encontrado
        }
    }
    response.status(statusCode);
    response.json(dadosEstado)
});


/* ************************FUNÇÃO 3************************ */
app.get('/capitalEstado/sigla/:uf', cors(), async function(request, response, next) {
    let siglaEstado = request.params.uf;
    let statusCode;
    let dadosCapitalEstado = {};

    if (siglaEstado == '' || siglaEstado == undefined || siglaEstado.length != 2 || !isNaN(siglaEstado)) {
        dadosCapitalEstado.message = "Não é possível processar a requisição, pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 digitos)";
        statusCode = 400;
    } else {
        //chama a função que filtra o estado pela sigla 
        let capital = estadosCidades.getCapitalEstado(siglaEstado)

        //valida se houve retorno válido da função
        if (capital) {
            statusCode = 200; //Estado encontrado
            dadosCapitalEstado = capital;
        } else {
            statusCode = 404; //Estado não encontrado
        }
    }
    response.status(statusCode);
    response.json(dadosCapitalEstado)
});


/* ************************FUNÇÃO 4************************ */
app.get('/estadosRegiao/regiao/descricao/:jRegiao', cors(), async function(request, response, next) {
    let nomeRegiao = request.params.jRegiao;
    let statusCode;
    let dadosEstadoRegiao = {};

    if (nomeRegiao == '' || nomeRegiao == undefined || !isNaN(nomeRegiao)) {
        dadosEstadoRegiao.message = "Não é possível processar a requisição, pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 digitos)";
        statusCode = 400;
    } else {
        //chama a função que filtra o estado pela sigla 
        let jRegiao = estadosCidades.getEstadosRegiao(nomeRegiao)

        //valida se houve retorno válido da função
        if (jRegiao) {
            statusCode = 200; //Estado encontrado
            dadosEstadoRegiao = jRegiao;
        } else {
            statusCode = 404; //Estado não encontrado
        }
    }
    response.status(statusCode);
    response.json(dadosEstadoRegiao)

    /* if (nomeRegiao == '' || nomeRegiao == undefined || !isNaN(nomeRegiao)) {
        response.status(400);
        response.json({ message: "Não é possível processar a requisição, pois a sigla do estado não foi informada ou não atende a quantidade de caracteres (2 digitos)" })
    } else {
        //chama a função que filtra o estado pela sigla 
        let jRegiao = estadosCidades.getEstadosRegiao(nomeRegiao)

        //valida se houve retorno válido da função
        if (jRegiao) {
            response.status(200); //Estado encontrado
            response.json(jRegiao);
        } else {
            response.status(404); //Estado não encontrado
        }
    } */
});


//permite carregar os endPoint criados e aguardar as requisições
//pelo protocolo HTTP na porta 8080
app.listen(8080, function() {
    console.log('Servidor aguardando requisições na porta 8080.')
});