Meteor.publish("mybills", function(){
  var currentUser = Meteor.users.findOne(this.userId);
  
  return bills.find({'registeredby': this.userId});
});

Meteor.publish("allbills", function(argument){
  return bills.find({},{fields:{
    series: false

  }});
});
