var http = require('http');

var server = http.createServer(function(req, res){

  var categoria = req.url;

  if(categoria == '/tecnologia'){
    res.end('<html><body>TI</body></html>');
  }
  else if(categoria == '/moda'){
    res.end('<html><body>Moda</body></html>');
  }
  else if(categoria == '/noticias'){
    res.end('<html><body>Noticias</body></html>');
  }
  else {
    res.end('<html><body>Not Found 404</body></html>');
  }

});

server.listen(3000);
