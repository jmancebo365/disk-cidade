
const dbConnection = require('./config/dbserver');
const app = require('./config/server');

app.get('/usuarios', function(req,res){
        
    let connection = dbConnection();

    let sql = 'select * from usuario';
    connection.query(sql, function (error, result) {
    console.log(result);
    res.json(result);
    });
})

app.get('/sugestoes', function(req,res){
        
    let connection = dbConnection();

    let sql = "select s.idSugestao, s.descricao,s.data, s.urlImagem,s.cidade,s.UF,s.titulo, u.nome as 'usuario' from sugestao s, usuario u where s.idUsuario = u.idUsuario;";
    connection.query(sql, function (error, result) {
    console.log(result);
    res.json(result);
    });
})

// app.post("/login", (req, res) => {
//     app.get('/usuarios', function(req,res){
        
//         let connection = dbConnection();
    
//         let sql = 'select * from usuario';
//         connection.query(sql, function (error, result) {
//         console.log(result);
//         res.json(result);
//         });
//     })
//     console.log(req.body)
// })

