$(document).ready(function () {
  var scrollTop = 0;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    $('.counter').html(scrollTop);

    if (scrollTop >= 50) {
      $('#global-nav').addClass('scrolled-nav');
    } else if (scrollTop < 50) {
      $('#global-nav').removeClass('scrolled-nav');
    }

  });

});


$(window).bind("mousewheel", function () {
  $("html, body").stop();
});

window.sr = ScrollReveal();
sr.reveal('#couple-1', { origin: 'top', duration: 1500, delay: 160, distance: '200px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-2', { origin: 'top', duration: 1500, delay: 160, distance: '200px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-3', { origin: 'top', duration: 1100, delay: 110, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-4', { origin: 'right', duration: 1100, delay: 110, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-5', { origin: 'left', duration: 1100, delay: 110, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-6', { origin: 'top', duration: 1100, delay: 110, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-7', { origin: 'right', duration: 1100, delay: 110, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-8', { origin: 'left', duration: 1100, delay: 110, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-9', { origin: 'top', duration: 1100, delay: 110, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-20', { origin: 'left', duration: 1500, delay: 160, distance: '200px', opacity: 0, scale: 1, reset: true });

sr.reveal('#schedule', { origin: 'top', duration: 1100, delay: 150, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#schedule-1', { origin: 'left', duration: 1100, delay: 150, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#schedule-2', { origin: 'right', duration: 1500, delay: 150, distance: '100px', opacity: 0, scale: 1, reset: true });

sr.reveal('#full-image', { origin: 'top', duration: 1100, delay: 110, distance: '50px', opacity: 0, scale: 1, reset: true });

sr.reveal('#travel-1', { origin: 'top', duration: 1100, delay: 110, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#travel-2', { origin: 'top', duration: 1100, delay: 110, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#travel-3', { origin: 'top', duration: 1500, delay: 110, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#travel-4', { origin: 'top', duration: 1500, delay: 110, distance: '50px', opacity: 0, scale: 1, reset: true });

sr.reveal('#rsvp-box', { origin: 'top', duration: 1500, delay: 110, distance: '60px', opacity: 0, scale: 1, reset: true });
sr.reveal('#rsvp', { origin: 'top', duration: 800, delay: 110, distance: '100px', opacity: 0, scale: 1, reset: true });

sr.reveal('#faq', { origin: 'top', duration: 1100, delay: 200, distance: '50px', opacity: 0, scale: 1, reset: true });




