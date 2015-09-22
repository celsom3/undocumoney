Router.configure({
  layoutTemplate: 'frontEndLayout'
});

Router.map(function(){
  this.route('home', {path: '/'});
  this.route('login', {
    path: '/login',
    layoutTemplate: 'loginLayout'
  });
  this.route('profile', {
    path: '/profile',
    layoutTemplate: 'profileLayout'
  });
  this.route('foundbill', {
    path: '/found-bill',
    layoutTemplate: 'profileLayout'
  });
  this.route('newbill', {
    path: '/new-bill',
    layoutTemplate: 'profileLayout'
  });
  this.route('admin', {
    path: '/admin',
    layoutTemplate: 'profileLayout'
  });
});

var mustBeSignedIn = function() {
    if (!(Meteor.user() || Meteor.loggingIn())) {
        Router.go('login');
        this.next();
    } else {
        this.next();
    }
};

var goAdmin = function() {
    if (Meteor.user()) {
        this.next();
        Router.go('profile');
    } else {
        this.next();
    }
};

Router.onBeforeAction(mustBeSignedIn, {except: ['home']});
Router.onBeforeAction(goAdmin, {only: ['login', 'profile']});

// catchall route
Router.route('/(.*)', function () {
    this.redirect('/');
});
