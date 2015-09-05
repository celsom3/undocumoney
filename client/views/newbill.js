Template.newbill.created = function(){
  Session.set('newbillmessage', '');
  Session.set('message', '');
};

Template.newbill.helpers({
  rendered: function(){

  },
  alertbox: function(){
    return Session.get('newbillmessage');
  },
  needchars: function(){
    var chars = Session.get('needchars');
    var message = chars + ' characters left.';
    if(parseInt(chars) > 0){
      return message;
    }else{
      return '';
    }

  }
});

Template.newbill.events({
  "submit form#newbill": function(e){
     e.preventDefault();

     var denomination = e.target.dx.value;
     var series = e.target.sx.value;
     var serial = e.target.serialnumber.value;
     var zip = e.target.zip.value;

     var note = e.target.note.value;
     var email = Meteor.user().emails[0].address;



     var serialre = new RegExp('.{8,13}');
     var serialOk = serialre.exec(serial);

     var zipre = new RegExp('^\d{5}$');
     var zipOk = zipre.exec(serial);

     if( serial === ''){
       Session.set('newbillmessage', '<div class="no-data alert alert-danger">Serial Number cannot be empty.</div>');
     }else if( series === 'select'){
       Session.set('newbillmessage', '<div class="no-data alert alert-danger">Please indicate the series number on the bill.</div>');
     }else if( bills.find({serial : serial}).fetch().length > 0){
       Session.set('newbillmessage', '<div class="no-data alert alert-danger">This bill is already registered. <a href="/found-bill">Record it as found here!</a></div>');
     }else if (note.length < 15){
       Session.set('newbillmessage', '<div class="no-data alert alert-danger">Please write a note describing how you found it.</div>');
     }
     else{

       bills.insert({
         serial: serial.toLowerCase(),
         denomination: denomination,
         registeredby: Meteor.userId(),
         series: series,
         history: [{
           timestamp: new Date(),
           zip: zip,
           recordedby: Meteor.userId(),
           note: note
         }]

       });

       // Now tweet out the good news.

       var tweet_note = note.slice(0,45) + '...';

       var tweet = tweet_note + ' New #undocumoney registered at Zip Code ' + zip + '. Register your own at http://undocumoney.com!'
       Meteor.call('tweet_out', tweet);

       e.target.serialnumber.value = '';
       e.target.zip.value = '';
       e.target.note.value = '';


       Session.set('newbillmessage', '<div class="no-data alert alert-success">You just registered a bill! <a href="/profile">Go to Profile.</a> or submit a new bill below.</div>');
     }

  },
  'keyup textarea#note': function(e){
    var usertext = $('textarea#note').val();
    var totalchars = usertext.length;
    var charsleft = 15 - totalchars;
    Session.set('needchars', charsleft.toString());
  }
});

Template.newbill.rendered = function(){

};
