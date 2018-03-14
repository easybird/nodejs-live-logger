var express = require('express');
var router = express.Router();
var sockets = require('../sockets');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Show logs' });
});

router.post('/log', (req, res, next) => {
  sockets && sockets.sockets.forEach((socket) => socket.emit('log', req.body))
  res.end();
})

module.exports = router;
