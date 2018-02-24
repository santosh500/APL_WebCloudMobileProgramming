console.log('hey there friends');

var person ={
    firsName: "Paul",
    lastName: "Charles",
    age: 25
}
console.log(person);


var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
var success = function (data) {
    console.log('Data [%s]', data);
};
twit= require('twitter'),
twitter = new twit({
    consumer_key: 'NrAYNgxAWrzadiuCUNmT0gahq', /* per appication - create a comsumer key here: https://dev.twitter.com/apps */
    consumer_secret: 'hDEJvT3VSWwARsGdhHyYCRckAltAM73wzQ8Hm1Knk0vyk6RKFn', /* create a comsumer key here: https://dev.twitter.com/apps */
    access_token_key: '966157340289495042-2KBP37lJKojwAaAyPkoSpUO0B5rPTTN',
    access_token_secret: 'BDlCQRaVd3H9Kd9ETDn6cHcFxG4JoeSuMCxoLFdKLHTpe'
});

var Twitter = require('twitter-node-client').Twitter;
twitter = new Twitter({
    "consumerKey": 'NrAYNgxAWrzadiuCUNmT0gahq', /* per appication - create a comsumer key here: https://dev.twitter.com/apps */
    "consumerSecret": 'hDEJvT3VSWwARsGdhHyYCRckAltAM73wzQ8Hm1Knk0vyk6RKFn', /* create a comsumer key here: https://dev.twitter.com/apps */
    "accessToken": '966157340289495042-2KBP37lJKojwAaAyPkoSpUO0B5rPTTN',
    "accessTokenSecret": 'BDlCQRaVd3H9Kd9ETDn6cHcFxG4JoeSuMCxoLFdKLHTpe'
});

twitter.getUserTimeline({ screen_name: 'BoyCook', count: '10'}, error, success);

var Stream = require('user-stream');
var stream = new Stream({
    consumer_key: 'NrAYNgxAWrzadiuCUNmT0gahq', /* per appication - create a comsumer key here: https://dev.twitter.com/apps */
    consumer_secret: 'hDEJvT3VSWwARsGdhHyYCRckAltAM73wzQ8Hm1Knk0vyk6RKFn', /* create a comsumer key here: https://dev.twitter.com/apps */
    access_token_key: '966157340289495042-2KBP37lJKojwAaAyPkoSpUO0B5rPTTN',
    access_token_secret: 'BDlCQRaVd3H9Kd9ETDn6cHcFxG4JoeSuMCxoLFdKLHTpe'
});

//create stream
stream.stream();

//listen stream data
var params = {
    with: 'BoyCook'
}
//create stream
stream.stream(params);