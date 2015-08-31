Template.home.helpers({
  rendered: function(){

  },
  latesttweets: function(){
    Meteor.call('getLatestTweets');
    return tweets.find({}, {
      'sort' : ['timestamp', 'desc']
      ,'limit': 8
    });
  }
});
