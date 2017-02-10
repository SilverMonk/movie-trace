var jsonServer = require('json-server');
var server = jsonServer.create();
var router = require('./router')(server);

var middlewares = jsonServer.defaults();
server.use(middlewares)

server.use(jsonServer.bodyParser)
server.use(function(req, res, next) {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now();
    }
    next()
});
var port = 3000;
server.listen(port, function() {
    console.log('JSON Server is running at port ' + port);
})
