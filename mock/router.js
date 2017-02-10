'use strict'

var jsonServer = require('json-server');
var router = jsonServer.router();
var db = require('./db.js')();

module.exports = function(server) {
    server.get('/:class', function(req, res) {
        res.json(db[req.params.class]);
    })
    server.get('/:class/:action', function(req, res) {
        if (req.params.action == 'get') {
            res.json(db[req.params.class][req.query.id]);
        } else if (req.params.action == 'list') {
            res.json(db[req.params.class]);
        }
    });
    server.use(router);
}
