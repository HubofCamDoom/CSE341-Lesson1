const routes = require('express').Router();
const firstController = require('../controllers');

//other name
routes.get('/', firstController.getName);

//my name
routes.get('/other', firstController.getOtherName);

module.exports = routes;