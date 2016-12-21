var events = (function() {
  var handleSignUp = function(event) {
    ga('send', 'event', {
      eventCategory: 'Call-to-Action',
      eventAction: 'click',
      eventLabel: 'Sign Up Button',
      transport: 'beacon',
      value: 10000
    });
  };

  return {
    handleSignUp: handleSignUp
  };
})();

$('.btn').click(function(event) {
  events.handleSignUp(event);
  });
