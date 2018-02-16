var app = require('./config/server')
var port = 3000;

// var rotaNoticias = require('./app/routes/noticias')(app);
// var rotaIndex = require('./app/routes/index')(app);
// var rotaFormulario = require('./app/routes/formulario_inclusao_noticia')(app);

app.listen(port, function(){
  console.log('Servidor rodando na porta ' + 3000);
});
