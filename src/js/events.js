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

  var initializeSlider = function() {
    $('.slider').slick({
      dots: true,
      arrows: false
    });
  };

  return {
    handleSignUp: handleSignUp,
    initializeSlider: initializeSlider
  };
})();

$(document).ready(function() {
  events.initializeSlider();
  $('.btn').click(function(event) {
    events.handleSignUp(event);
    });
});
