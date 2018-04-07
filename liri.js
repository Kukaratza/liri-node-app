require("dotenv").config();
let keys = require("./keys.js");
var twitter = require('twitter');
let spotify = require('spotify');
let client = new twitter(keys.twitter)

let [node, script, tweets] = process.argv;

if (tweets === "my-tweets") {
  client.get('statuses/user_timeline', {}, function (error, tweets, response) {
    if (error){console.log(error);
    throw error} 
    
    for (let i = 0; i < 20; i++) {
      console.log(`[ Last tweet: ` + tweets[i].text + " || Created at: " + tweets[i].created_at + " ]");
    }
  })
}

if (spotify === "spotify-this-song") {
  spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
 //need to work on this ....
    
});
}