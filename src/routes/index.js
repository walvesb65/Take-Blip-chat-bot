const express = require('express');
const routes = express.Router();
const takeRoutes = require('./takeRoutes');

routes.use('/takeblip', takeRoutes);

module.exports = routes;