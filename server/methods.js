Meteor.startup(function(){
  Meteor.methods({
    getTotalUsers:function(){
       return Meteor.users.find().fetch().length;
    }
  });
});
