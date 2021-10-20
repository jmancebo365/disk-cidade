let express = require('express');

let app = express();
let port = 3001;

app.set("view engine", "ejs");

app.listen(port,function(){
    console.log('Servidor rodando com express na porta',port);
});

module.exports = app;