let mysql = require('mysql');

module.exports = function () {
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Jsv#AE1202',
        database: 'diskcidade'
    });
}
