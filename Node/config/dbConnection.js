var mysql = require('mysql');

var connMySql = function(){
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Gdx2610',
    database: 'portal_noticias'
  });
}

module.exports = function(){
  return connMySql;
}
