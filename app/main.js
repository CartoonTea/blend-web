var express = require('express');
var app = express();

app.use('/static', express.static(__dirname + '/static'));

app.get('/', function (req, res) {
  res.send('hello world');
});

app.post('/callback', function(req, res) {

});

app.listen(3000);

console.log('listening on port 3000');