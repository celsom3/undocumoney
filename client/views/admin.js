
Template.admin.helpers({
  create: function(){

  },
  rendered: function(){

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
    return 3393;
  },
  totalParticipants: function(){
    return 49;
  }
});

Template.admin.events({
  "click #foo": function(event, template){

  }
});
