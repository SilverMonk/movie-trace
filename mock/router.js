'use strict'

var jsonServer = require('json-server');
var router = jsonServer.router();
var db = require('./db.js')();

module.exports = function(server) {
    server.get('/:pname', function(req, res) {
        res.json(db);
    });
    server.get('/:pname/:class', function(req, res) {
        res.json(new Sysmsg(db[req.params.class]));
    });
    server.get('/:pname/:class/:action', function(req, res) {
        if (req.params.action == 'get') {
            res.json(new Sysmsg(db[req.params.class][req.query.id]));
        } else if (req.params.action == 'list') {
            res.json(new Sysmsg(db[req.params.class]));
        } else {
            //console.log(req.params.class);
        }
    });
    //server.use(router);
    server.use('/nestfilm', router)
};
class Sysmsg {
    constructor(data) {
        this.errCode = 0;
        this.errMsg = "";
        this.data = data;
    }
}
