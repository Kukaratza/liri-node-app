require("dotenv").config();
let keys = require("./keys.js");
var Twitter = require('twitter');
let client = new Twitter(keys.twitter)

let [node, script, tweets] = process.argv;

if (tweets === "my-tweets") {
  client.get('statuses/user_timeline', {}, function (error, tweets, response) {
    if (error) throw error
    for (let i = 0; i < 20; i++) {
      console.log(`[ Last tweet: ` + tweets[i].text + " || Created at: " + tweets[i].created_at + " ]");
    }
  })
}