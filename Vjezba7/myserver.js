var http = require('http');
var dte = require('./mymodule');
var url = require('url');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'})
    var parseUrl = url.parse(req.url, true).query
    var text = parseUrl.year + " " + parseUrl.month // req.url nam je domena
    res.end(text)
}).listen(8000);