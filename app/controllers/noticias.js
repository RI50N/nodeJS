module.exports.listarNoticias = function(application, res) {
  var connection = application.config.dbConnection();
  var noticiasModel = new application.app.models.NoticiasDAO(connection);

  noticiasModel.getNoticias(function(error, result) {
    res.render("noticias/noticias", {
      noticias: result
    });
  });
}

module.exports.detalhesNoticia = function(application, req, res) {

  var connection = application.config.dbConnection();
  var noticiasModel = new application.app.models.NoticiasDAO(connection);

  noticiasModel.getNoticia(req.query.id_noticia,function(error, result) {
    res.render("noticias/noticia", {
      noticia: result
    });
  });
}
