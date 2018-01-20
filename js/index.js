var http=require('http')
port=8000;
host="127.0.0.1";

var server=http.create(function(req,res){
  res.writehead(200,{"content-type":"text/plain"})
res.write("hello world");
res.end();
});
server.listen(port,host,function)
