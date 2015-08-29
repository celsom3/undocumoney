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
      return '<div class="no-data alert alert-danger">No data found! <a href="{{ pathFor "newbill" }}">Register your first bill!</a></div>';
    }

  }

});
