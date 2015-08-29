Template.mybilltablerow.helpers({
  rendered: function(){

  },
  entrytime: function(){
    return this.history[0].timestamp;
  },
  billhistory: function(){
    return this.history;
  },
  location: function(){
    var historyLength = this.history.length - 1;
    return this.history[historyLength].zip;
  }
});
