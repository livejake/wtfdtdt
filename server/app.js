var express = require('express'),
    bodyParser = require('body-parser'),
    http = require('http'),
    path = require('path'),
    Twitter = require('twitter'),
    utils = require('./utils'),
    twitterAndroid = require('./utils'),
    TwitterSecrets = require('./keys');

var app = module.exports = express();

app.set('port', process.env.PORT || 8000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var client = new Twitter({
  consumer_key: TwitterSecrets.ConsumerKey,
  consumer_secret: TwitterSecrets.ConsumerSecret,
  access_token_key: TwitterSecrets.AccessToken,
  access_token_secret: TwitterSecrets.AccessTokenSecret
});

//API
app.route('/api/twitter')
  .get(function(req, res) {
    var params = {screen_name: 'realdonaldtrump'};
    client.get('statuses/user_timeline', params, function(error, tweets, response) {
      if (!error) {
        filteredTweets = tweets.filter(function(tweet){
          return utils.isToday(tweet.created_at) && tweet.source == utils.twitterAndroid
        })
        res.json(filteredTweets);
      }
    });
  })

// Redirect all non api requests to the index
// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'public', 'index_bundled.html'));
// });

// Starting express server
http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});