var http = require('http');

var serve = http.createServer( function(req,res){
  var categoria = req.url;

  console.log(categoria);
  if(categoria == '/tecnologia'){
    res.end("<html><body>tecnologia</body></html>");
  }else if(categoria == '/moda'){
    res.end("<html><body>moda</body></html>");
  }else if(categoria == '/beleza'){
    res.end("<html><body>beleza</body></html>");
  }else{
    res.end("<html><body>portal</body></html>");
  }
});

serve.listen(3000);
