const { Router } = require('express');
const routes = Router();
const { getRepository } = require('../controller/takeCtrl');

routes.get('/repository', getRepository)

module.exports = routes;