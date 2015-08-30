Meteor.publish("mybills", function(){
  return bills.find({'registeredby': this.userId});
});

Meteor.publish("allbills", function(argument){
  return bills.find({},{fields:{
    series: false

  }});
});
