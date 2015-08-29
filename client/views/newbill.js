Template.newbill.created = function(){
  Session.set('newbillmessage', '');
};

Template.newbill.helpers({
  rendered: function(){

  },
  alertbox: function(){
    return Session.get('newbillmessage');
  }
});

Template.newbill.events({
  "submit form#newbill": function(e){
     e.preventDefault();

     var denomination = e.target.dx.value;
     var series = e.target.sx.value;
     var serial = e.target.serialnumber.value;
     var zip = e.target.zip.value;
     var have = e.target.have.checked;
     var note = e.target.note.value;
     var email = Meteor.user().emails[0].address;

     if(bills.find({serial : serial}).fetch().length > 0){
       Session.set('newbillmessage', '<div class="no-data alert alert-danger">This bill is already registered. <a href="/found-bill">Record it as found here!</a></div>');
     }else{

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

       e.target.serialnumber.value = '';
       e.target.zip.value = '';
       e.target.note.value = '';
       e.target.have.checked = false;

       Session.set('newbillmessage', '<div class="no-data alert alert-success">You just registered a bill! <a href="/profile">Go to Profile.</a> or submit a new bill below.</div>');
     }




  }
});
