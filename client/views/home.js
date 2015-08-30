Template.home.helpers({
  rendered: function(){

  },
  latesttweets: function(){
    return tweets.find({}, {
      'sort' : ['timestamp', 'asc'],
      'limit': 4
    });
  }
});
