Template.home.helpers({
  rendered: function(){

  },
  latesttweets: function(){
    // var response = Meteor.call('getLatestTweets');
    // var tweets = response.statuses;
    // console.log(Session.get('thetweets'));
    // return Session.get('thetweets');
    return tweets.find({}, {'sort' : ['timestamp', 'asc']});
  }
});
