Template.home.helpers({
  rendered: function(){

  },
  latestTweets: function(){
    return Twit.get('search/tweets', { q: '#undocumoney since:2015-08-27', count: 4 }, function(err, data, response) {
      console.log(data);
    });
  }
});
