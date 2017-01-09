var events = (function() {
  var handleSignUp = function(event) {
    ga('send', 'event', {
      eventCategory: 'Call-to-Action',
      eventAction: 'click',
      eventLabel: 'Sign Up Button',
      transport: 'beacon',
      value: 10000
    });

    //sign up
    console.log('hitting mixpanels');
    mixpanel.track("Sign Up");

    var email = $('.sign-up-email').val();
    console.log(email);
    mixpanel.identify(email);

    mixpanel.people.set({
      "$email": email,
      "$created": new Date()
    });

  };
  return {
    handleSignUp: handleSignUp
  };
})();

$(document).ready(function() {
  $('.btn').click(function(event) {
    events.handleSignUp(event);
    });
});
