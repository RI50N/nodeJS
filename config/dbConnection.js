var mysql = require('mysql');

var connMySQL = function() {
  console.log('Conexao com bd foi estabelecida');
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'portal_noticias'
  });
}

module.exports = function() {
  return connMySQL;
}
