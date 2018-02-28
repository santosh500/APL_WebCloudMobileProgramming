var http = require("http");
var https = require("https");
var Twitter = require('twitter-js-client').Twitter;


var request = require('request');
//Callback functions
var error = function (err, response, body) {
    console.log('ERROR [%s]', err);
};
var success = function (data) {
    console.log('Data [%s]', data);
};

var Twitter = require('twitter-node-client').Twitter;

//Get this data from your twitter apps dashboard
var config = {
    "consumerKey": 'NrAYNgxAWrzadiuCUNmT0gahq',
    "consumerSecret": 'hDEJvT3VSWwARsGdhHyYCRckAltAM73wzQ8Hm1Knk0vyk6RKFn',
    "accessToken": '966157340289495042-2KBP37lJKojwAaAyPkoSpUO0B5rPTTN',
    "accessTokenSecret": 'BDlCQRaVd3H9Kd9ETDn6cHcFxG4JoeSuMCxoLFdKLHTpe',
};

var twitter = new Twitter(config);

//Example calls

// twitter.getUserTimeline({ screen_name: 'BoyCook', count: '10'}, error, success);
//
// twitter.getMentionsTimeline({ count: '10'}, error, success);
//

//var parsed = JSON.parse(t);
//var q = t.slice(1,50);
//twitter.getFollowersList({screen_name: 'realDonaldTrump', count: '10'}, error, success);
//var content = JSON.parse(stringify);

console.log(twitter.getCustomApiCall('/statuses/lookup.json',{ id: '412312323'}, error, success));

 //twitter.getReTweetsOfMe({screen_name: 'realDonaldTrump', count: '10'}, error, success);

//twitter.getTweet({ id: 'BoyCook'}, error, success);


//
// Get 10 tweets containing the hashtag haiku
//
