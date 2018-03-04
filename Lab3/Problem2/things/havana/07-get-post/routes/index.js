var express = require('express');
var router = express.Router();
var d3 = require("d3");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cool, huh!', condition: true, anyArray: [1,2,3] });
});

router.get('/test/:id', function(req, res, next) {
    var Twitter = require('twitter');
    var http = require('http');
    var fs = require('fs');
    var client = new Twitter({
        consumer_key: 'NrAYNgxAWrzadiuCUNmT0gahq',
        consumer_secret: 'hDEJvT3VSWwARsGdhHyYCRckAltAM73wzQ8Hm1Knk0vyk6RKFn',
        access_token_key: '966157340289495042-2KBP37lJKojwAaAyPkoSpUO0B5rPTTN',
        access_token_secret: 'BDlCQRaVd3H9Kd9ETDn6cHcFxG4JoeSuMCxoLFdKLHTpe'
    });

    var o;
    var mainArray;
    var params = {screen_name: 'realDonaldTrump'};
    client.get('friends/list', params, function(error, tweets, response) {
        if (!error)
        {
            // console.log(tweets);
            o = tweets.toString();

            var myJSON = JSON.stringify(tweets);
            var obj = JSON.parse(myJSON);
            var tacos = obj.users;
            mainArray = tacos;
            module.exports.myArray = mainArray;
            for(i=0; i<tacos.length; i++)
            {
                console.log(tacos[i].screen_name);
                var server=http.createServer(function(req,res){
                    res.writeHead(tacos[i].screen_name, {'Content-Type': 'text/html'});
                    var myReadStream = fs.createReadStream(_dirname + '/index.html', 'utf8');
                    myReadStream.pipe(res);
                });

            }
            res.render('test', {output: tacos[0].screen_name + ' ' + tacos[1].screen_name , output2: tacos[2].screen_name});
            // const D3Node = require('d3-node')
            // const d3n = new D3Node()      // initializes D3 with container element
            // d3n.createSVG(10,20).append('g') // create SVG w/ 'g' tag and width/height
            // d3n.svgString() // output: <svg width=10 height=20 xmlns="http://www.w3.org/2000/svg"><g></g></svg>
            console.log(tacos.length);
            console.log('car');

        }
    });



});

router.post('/test/submit', function(req, res, next) {
  res.redirect('/test/...');
});

module.exports = router;
