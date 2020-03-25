const app = require('express').Router();
const pages = require('../controllers/pages')

app.get('/page1',pages.page1)

app.get('/page2',pages.page2)


app.get('/page3',pages.page3)


module.exports = app;