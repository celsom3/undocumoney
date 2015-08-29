Template.mybilltable.created = function(){
  Session.set('message', '');
};

Template.mybilltable.helpers({
  onReady: function(){
    //Meteor.subscribe("mybills");

  },
  bill: function(){

    return bills.find({ registeredby: Meteor.userId() });
  },
  nobills: function(){
    var thebills = bills.find({ registeredby: Meteor.userId() }).fetch();
    if (thebills.length === 0){
      Session.set('message','<div class="no-data alert alert-danger">You haven\'t registered any bills! <a href="{{ pathFor "newbill" }}">Register your first bill!</a></div>');
      return Session.get('message');
    }

  }

});
