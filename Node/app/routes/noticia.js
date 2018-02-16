module.exports = function(application){
  application.get('/noticia/:id', function(req, res){
    var id = req.params.id;
    var connection = application.config.dbConnection();
    var NoticiasDAO = new application.app.models.NoticiasDAO(connection);

    NoticiasDAO.getNoticiaId(id, function(err, result){
      res.render('noticias/noticia', {noticia: result});
    });

  });
}
