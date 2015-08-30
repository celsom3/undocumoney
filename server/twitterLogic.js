Meteor.startup(function(){
  Meteor.methods({
    'getLatestTweets': function(){
      var cleanTweets = T.get('search/tweets', { q: '#undocumoney since:2015-08-28', count: 1, f: 'images' }, Meteor.bindEnvironment(function(err, data, response) {
        var statuses = data.statuses ? data.statuses : [];
        //console.log(data);
        if(!err && statuses.length !== 0){
          console.log("Getting tweets...");
          console.log(" ");
          console.log(" ");
          console.log(" ");
          console.log(" ");

          var formattedTweets = [];

          // Initialize counter for tweets with images
          var foundImages = 0;

          // for (each tweet && counter<=4)
          for ( var i = 0; foundImages < 20; i++){
            // Check to see if status already exists in collection
            var already_have = false;

            // var thisTweetId = statuses[i].id ? statuses[i].id : 0;
            //
            // for (b = 0; b < tweets.find().fetch().length; b++){
            //   if(tweets.find().fetch()[b].id === thisTweetId){
            //     already_have = true;
            //     break;
            //   }
            // }
            // console.log(statuses[i]);
            // var thisTweetText = statuses[i].text;
            //
            // for (c = 0; c < tweets.find().fetch().length; c++){
            //   if(tweets.find().fetch()[c].text === thisTweetText){
            //     already_have = true;
            //     break;
            //   }
            // }

            console.log(statuses[i]);

            // If tweet has image
            if((statuses[i].entities !== undefined) && (statuses[i].entities.media !== undefined) && !already_have){
              // Get all needed tweet info and add to tweet db
              // Get the tweet ID
              var tweetId = statuses[i].id;

              var statusText = statuses[i].text;
              //console.log(statusText);

              var imageUrl = statuses[i].entities.media[0].media_url;
              //console.log(imageUrl);

              var screenName = statuses[i].user.screen_name;
              //console.log(statuses[i].user.screen_name);


              formattedTweets.push({
                tweetId: tweetId,
                statusText: statusText,
                imageUrl: imageUrl,
                screenName: screenName
              });

              tweets.insert({
                timestamp: new Date(),
                tweetId: tweetId,
                statusText: statusText,
                imageUrl: imageUrl,
                screenName: screenName
              });

              foundImages = foundImages + 1;
            }

          }// END FOR loop


          //console.log(formattedTweets);
          // return formattedTweets;
        }else{
          console.log(err);
          //return err;
        }

      }));

      // return cleanTweets;
    },
    'insert_tweet': function(tweet){
      this.unblock();
      tweets.insert(tweet);

    }
  });

});
