var http=require('http');
var module1 = require('./module1');
var module2 = require('./module2');
var sherry = require('./sherry');

function onRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(module1.myString);
    response.write(module1.myString);
    module1.myFunction();
    var q = sherry.myArray;
    for(i=0; i<15; i++)
    {
        response.write(q[i].screen_name + '\n');
    }

    response.end();
}

http.createServer(onRequest).listen(8080);