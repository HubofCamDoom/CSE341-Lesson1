const routes = require('express').Router();
const firstController = require('../controllers');

//my name
routes.get('/', firstController.getName);

//the other name
routes.get('/other', firstController.getOtherName);

module.exports = routes;