var express = require('express');
var app = express();

app.use(express.static(__dirname));
app.use('/dist/', express.static('_site/dist/'));
app.use('/', express.static('/_site/index.html'));

app.use('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

var port = 4000;

app.listen(port, "0.0.0.0", function() {
    console.log("listening on: " + port);
});

console.log(process.pid);

// after this point, we are a daemon
//require('daemon')();
