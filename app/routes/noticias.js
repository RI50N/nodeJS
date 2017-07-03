module.exports = function(application) {
  application.get('/noticias', function(req, res) {
    application.app.controllers.noticias.listarNoticias(application, res);
  });

  application.get('/noticia', function(req, res) {
    application.app.controllers.noticias.detalhesNoticia(application, res);
  });
}
