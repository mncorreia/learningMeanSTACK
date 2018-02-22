function NoticiasDAO(connection){
  this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
  this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
};

NoticiasDAO.prototype.getNoticiaId = function(id, callback){
  this._connection.query(`select * from noticias where id_noticia = ${id}` , callback);
}

NoticiasDAO.prototype.salvarNoticia = function(noticia, callback) {
  this._connection.query('insert into noticias set ?', noticia, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback) {
  this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);
}

module.exports = function() {
  return NoticiasDAO;
}
