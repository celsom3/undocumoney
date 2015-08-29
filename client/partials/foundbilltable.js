Template.foundbilltable.created = function(){
  Session.set('foundtablemessage', '');
};

Template.foundbilltable.helpers({
  onReady: function(){
    //Meteor.subscribe("mybills");

  },
  bill: function(){

    return bills.find(
      { history: { $elemMatch:{
          recordedby: Meteor.userId()
          }
        },
        registeredby: { $ne : Meteor.userId() }
      });
  },
  nofoundbills: function(){
    var thebills = bills.find(
      { history: { $elemMatch:{
          recordedby: Meteor.userId()
          }
        },
        registeredby: { $ne : Meteor.userId() }
      }).fetch();
    if (thebills.length === 0){
      Session.set('foundtablemessage', '<div class="no-data alert alert-danger">You haven\'t registered any bills. <a href="/found-bill" }}">Record your first found bill!</a></div>');
      return Session.get('foundtablemessage');
    }

  }

});
