console.log('Hi This is index.js');
var express = require('express');
var app = express();

app.use(express.static(__dirname+'/public'));
app.set('view options', {layout: false});
app.set('view engine', 'html');

app.get('/', function (req, res){
    res.send('__dirname'+'/public/perm.docx');
})

app.listen(8080, function(){
    console.log('Listening on port 8080');
})
