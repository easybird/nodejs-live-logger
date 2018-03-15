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

console.log('');
console.log(`App is running on localhost:${process.env.PORT || '3000'}`);
console.log('');
console.log('-----------------------------------------------------------------');
console.log('-----------------------------------------------------------------');
console.log('1) Inspect logs');
console.log(`Browse to http://localhost:${process.env.PORT || '3000'} and wait for new logging to appear`);

console.log('-----------------------------------------------------------------');
console.log('2) Add logging');
console.log(`POST to http://localhost:${process.env.PORT || '3000'}/log to add new logging`);
console.log('-----------------------------------------------------------------');
console.log('-----------------------------------------------------------------');
console.log('');
console.log('');

module.exports = router;
