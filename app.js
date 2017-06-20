var app = require("./config/server");

var rotahome = require('./app/routes/home')(app);

var rotaFormularioInclusaoNoticia = require('./app/routes/formulario_inclusao_noticia')(app);

var rotaNoticias = require('./app/routes/noticias')(app);

app.listen(3000, function(){
  console.log("Servidor ON");
});
