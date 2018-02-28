var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'NrAYNgxAWrzadiuCUNmT0gahq',
    consumer_secret: 'hDEJvT3VSWwARsGdhHyYCRckAltAM73wzQ8Hm1Knk0vyk6RKFn',
    access_token_key: '966157340289495042-2KBP37lJKojwAaAyPkoSpUO0B5rPTTN',
    access_token_secret: 'BDlCQRaVd3H9Kd9ETDn6cHcFxG4JoeSuMCxoLFdKLHTpe'
});

var o;
var params = {screen_name: 'realDonaldTrump'};
client.get('friends/list', params, function(error, tweets, response) {
    if (!error)
    {
       // console.log(tweets);
        o = tweets.toString();
        var myJSON = JSON.stringify(tweets);
        var obj = JSON.parse(myJSON);
        var tacos = obj.users;
        for(i=0; i<tacos.length; i++)
        {
            console.log(tacos[i].screen_name);
        }
        console.log(tacos.length);
        console.log('car');
    }
});

