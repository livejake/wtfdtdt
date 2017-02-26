var moment = require('moment');

exports.isToday = function(date){
  var tweetDate = moment(date,'dd MMM DD HH:mm:ss ZZ YYYY','en')
  .format('L');

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();
  if(dd<10) {
      dd='0'+dd
  }

  if(mm<10) {
      mm='0'+mm
  }

  today = mm+'/'+dd+'/'+yyyy;
  return tweetDate == today;
}

exports.twitterAndroid = "<a href=\"http://twitter.com/download/android\" rel=\"nofollow\">Twitter for Android</a>"