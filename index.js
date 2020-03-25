const express = require('express');
const app = express();


app.set('view engine','ejs');



const routes = require('./routes');
// a linha de cima é o mesmo que: const routes = require('./routes/index.js');

app.use(routes)




app.listen(process.env.PORT || 3000)