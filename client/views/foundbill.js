Template.foundbill.created = function(){
  Meteor.subscribe("allbills");
  Session.set('message', '');
};

Template.foundbill.events({
  "submit form": function(e){
     e.preventDefault();


     var serial = e.target.serialnumber.value;
     serial = serial.toLowerCase();
     var zip = e.target.zip.value;
     var have = e.target.have.checked;
     var note = e.target.note.value;
     var email = Meteor.user().emails[0].address;


     var thisbill = bills.findOne({'serial': serial});

     // check to see if this bill exists
     if (thisbill){
       var billId = thisbill._id;

       bills.update({_id:billId},
       {$push: {
         "history": {
           timestamp: new Date(),
           zip: zip,
           recordedby: Meteor.userId(),
           note: note
         }
       }
      });


      e.target.serialnumber.value = '';
      e.target.zip.value = '';
      e.target.note.value = '';
      e.target.have.checked = false;

      Session.set('message', '<div class="no-data alert alert-success">Thanks for registering this bill!</div>')
    }else{
      Session.set('message', '<div class="no-data alert alert-danger">Couldn\'t find this bill in our records. <a href="/new-bill">Register it as new here!</a></div>');
    }







  }
});

Template.foundbill.helpers({
  alertbox: function(){
    return Session.get('message');
  }
});
