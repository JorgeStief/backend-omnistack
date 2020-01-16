const { Router } = require('express');
const DevController = require('./controllers/DevController')
const SearchController = require('./controllers/SearchController')
const routes =  Router();

//Metodos http: GET, POST PUT, DELETE

//tippos de parametros:

//Query Params: req.query (Filtros, ordenaçao, paginação, ....)
//Route Params: request.params (Identoificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação e alteração de um registro)

//MongoDB (Não-Relacional)

routes.get('/devs',DevController.index);
routes.post('/devs',DevController.store);

routes.get('/search',SearchController.index);


module.exports = routes;