const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.get('/', (_req, res) => res.send());

module.exports = app;
