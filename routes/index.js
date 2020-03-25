// esse arquivo é o concentrador de rotas 
const app = require('express').Router();
const pages = require('./pages');


app.get('/',(req,res) => {
    res.render('home')
})


app.use(pages);


module.exports = app 