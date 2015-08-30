Meteor.startup(function(){
  Meteor.methods({
    'getLatestTweets': function(){


      var cleanTweets = T.get('search/tweets', { q: '#undocumoney since:2015-08-27', count: 40, f: 'images' }, Meteor.bindEnvironment(function(err, data, response) {
        if(!err){
          console.log("Getting tweets...");
          //console.log(response);
          // var statusText = data.statuses[1].text;
          // console.log(statusText);
          //
          // var imageUrl = data.statuses[1].entities.media[0].media_url;
          // console.log(imageUrl);
          //
          // var screenName = data.statuses[1].user.screen_name;
          // console.log(data.statuses[1].user.screen_name);
          var formattedTweets = [];

          // Initialize counter for tweets with images
          var foundImages = 0;

          // for (each tweet && counter<=4)
          for ( var i = 0; foundImages < 4; i++){
            // Check to see if status already exists in collection
            var already_have = false;

            for (b = 0; b < tweets.find().fetch().length; b++){
              if(tweets.find().fetch()[b].statusText === data.statuses[i].text){
                already_have = true;
              }
            }

            // If tweet has image
            if(data.statuses[i].entities.media){
              // Get all needed tweet info and add to tweet array
              var statusText = data.statuses[i].text;
              //console.log(statusText);

              var imageUrl = data.statuses[i].entities.media[0].media_url;
              //console.log(imageUrl);

              var screenName = data.statuses[i].user.screen_name;
              //console.log(data.statuses[i].user.screen_name);

              formattedTweets.push({

                statusText: statusText,
                imageUrl: imageUrl,
                screenName: screenName
              });

              tweets.insert({
                timestamp: new Date(),
                statusText: statusText,
                imageUrl: imageUrl,
                screenName: screenName
              });



              foundImages++;
            }

          }// END FOR loop


          console.log(formattedTweets);
          return formattedTweets;
        }else{
          console.log(err);
          //return err;
        }
      }));

      return cleanTweets;
    },
    'insert_tweet': function(tweet){
      this.unblock();
      tweets.insert(tweet);

    }
  });

});
