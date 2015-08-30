Template.home.helpers({
  rendered: function(){

  },
  latesttweets: function(){
    Meteor.call('getLatestTweets');
    return tweets.find({}, {
      'sort' : ['timestamp', 'asc']
      ,'limit': 4
    });
  }
});
