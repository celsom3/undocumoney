Meteor.publish("mybills", function(){
  var currentUser = Meteor.users.findOne(this.userId);
  useremail = currentUser.emails[0].address;
  return bills.find({'registeredby': this.userId});
});

Meteor.publish("allbills", function(argument){
  return bills.find({},{fields:{
    denomination: false,
    series: false

  }});
});
