var express = require('express');
var router = express.Router();
var data = require('../data.json')
/* GET home page. */
router.get('/', function(req, res, next) {
    var addr = (req.param('add')||'').toUpperCase();

    res.render('index', { title: 'Express',has:data[addr]||false});
});

router.post('/s', function(req, res, next) {
    var addr = (req.body.addr||'').toUpperCase();
    res.json( {data:{addr: data[addr] }});
});

module.exports = router;
