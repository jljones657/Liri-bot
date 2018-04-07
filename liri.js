var dotenv = require("dotenv").config();
var keys = require("./keys.js");
var Twitter = require('twitter');
var spotify = require('spotify');
var client = new Twitter(keys.twitter);
var fs = require ('fs-extra');

//capture user input, and inform user of what to type in.
console.log("Type 'my-tweets' to get started!");
//process[2] choses action, process[3] as search parameter for spotify or movie.
var userCommand = process.argv[2];
var secondCommand = process.argv[3];
//process multiple words. Triggers if user types anything more than the above console logged options and first parameter.
	for(i=4; i<process.argv.length; i++){
	    secondCommand += '+' + process.argv[i];
	}

function theSwitch(){
	//action statement, switch statement to declare what action to execute.
	switch(userCommand){

		case 'my-tweets':
		fetchTweets();
		break;

		
	}
};
//functions/options
function fetchTweets(){
	console.log("Tweets Incoming!");
	//new variable for instance of twitter, load keys from imported keys.js
	var client = new Twitter({
        consumer_key: process.env.TWITTER_CONSUMER_KEY,
        consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
        access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
        access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
	});

	//parameters for twitter function.
	var parameters = {
		screen_name: 'Narcissisme_pur',
		count: 20
	};

	//call the get method on our client variable twitter instance
	client.get('statuses/user_timeline', parameters, function(error, tweets, response){
		if (!error) {
	        for (i=0; i<tweets.length; i++) {
	            var returnedData = ('Number: ' + (i+1) + '\n' + tweets[i].created_at + '\n' + tweets[i].text + '\n');
	            console.log(returnedData);
	            console.log("-------------------------");
	        }
	    };
	});
};//end fetchTweets;





theSwitch();
