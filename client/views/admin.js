
Template.admin.helpers({
  create: function(){

  },
  rendered: function(){
    Session.set('totalUsers', '');
  },
  destroyed: function(){

  },
  totalBills: function(){
    return bills.find().fetch().length;
  },
  billsFound: function(){
    var billsFound = 0;

    var billsList = bills.find().fetch();

    for (var i = 0; i < billsList.length; i++){
      if(1 === billsList[i].history.length ){

      }else{
        billsFound++;
      }
    }

    return billsFound;
  },
  totalValue: function(){
    var tValue = 0;

    var billsList = bills.find().fetch();

    for (var i = 0; i < billsList.length; i++){
      var billValue = billsList[i].denomination;
      tValue += parseInt(billValue);
    }
    return tValue;
  },
  totalParticipants: function(){
    var totalUsers = 0;

    Meteor.call("getTotalUsers", function(err, data){
      console.log(data);
      if(err){
        console.log(err);
      }else{
        Session.set('totalUsers', String(data));
      }

    });
    return Session.get('totalUsers');
  }
});

Template.admin.events({
  "click #foo": function(event, template){

  }
});
