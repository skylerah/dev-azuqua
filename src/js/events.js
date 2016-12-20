var events = (function() {
  var handleSignUp = function(event) {
    ga('send', 'event', {
      eventCategory: 'Call-to-Action',
      eventAction: 'click',
      eventLabel: 'Sign Up Button',
      transport: 'beacon'
    });
  };

  return {
    handleSignUp: handleSignUp
  };
})();

$('.btn').click(function(event) {
  events.handleSignUp(event);
  });
