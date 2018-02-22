module.exports.noticias = function(application, req , res){
  var connection = application.config.dbConnection();
  var NoticiasDAO = new application.app.models.NoticiasDAO(connection);

  NoticiasDAO.getNoticias(function(err, result){
    // console.log(result);
    res.render('noticias/noticias', {noticias: result});
  });
}

module.exports.noticia = function(application, req , res){
  var id = req.params.id;
  var connection = application.config.dbConnection();
  var NoticiasDAO = new application.app.models.NoticiasDAO(connection);

  NoticiasDAO.getNoticiaId(id, function(err, result){
    console.log(result);
    res.render('noticias/noticia', {noticia: result});
  });
}
