module.exports = function(application) {

  application.get('/noticia', function(req, res) {

    var connection = application.config.dbConnection();
    var noticiasModel = application.app.models.noticiasModel;

    noticiasModel.getNoticia(connection, function(error, result) {
      res.render("noticias/noticia", {noticia : result});
    });

    // connection.query('SELECT * FROM noticias WHERE id_noticia = 2', function(error, result) {
    //   res.render("noticias/noticia", {noticia : result});
    // });
  });
}
