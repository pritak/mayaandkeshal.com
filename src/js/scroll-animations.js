$(document).ready(function () {
  var scrollTop = 0;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    $('.counter').html(scrollTop);

    if (scrollTop >= 100) {
      $('#global-nav').addClass('scrolled-nav');
    } else if (scrollTop < 100) {
      $('#global-nav').removeClass('scrolled-nav');
    }

  });

});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function (event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

window.sr = ScrollReveal();
sr.reveal('#main-2', { origin: 'right', duration: 600, delay: 50, distance: '100px', opacity: 0, scale: 0.7, reset: true });

sr.reveal('#couple-1', { origin: 'bottom', duration: 1000, delay: 100, distance: '200px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-2', { origin: 'right', duration: 600, delay: 50, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-3', { origin: 'left', duration: 600, delay: 50, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-4', { origin: 'right', duration: 600, delay: 50, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-5', { origin: 'left', duration: 600, delay: 50, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-6', { origin: 'right', duration: 600, delay: 50, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-7', { origin: 'left', duration: 600, delay: 50, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-8', { origin: 'right', duration: 600, delay: 50, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-9', { origin: 'left', duration: 600, delay: 50, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-10', { origin: 'right', duration: 600, delay: 50, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-11', { origin: 'bottom', duration: 600, delay: 150, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-12', { origin: 'bottom', duration: 600, delay: 150, distance: '50px', opacity: 0, scale: 1, reset: true });

sr.reveal('#schedule', { origin: 'bottom', duration: 600, delay: 150, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#schedule-1', { origin: 'left', duration: 600, delay: 150, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#schedule-2', { origin: 'right', duration: 1000, delay: 150, distance: '100px', opacity: 0, scale: 1, reset: true });
sr.reveal('#schedule-3', { origin: 'left', duration: 600, delay: 150, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#schedule-4', { origin: 'right', duration: 1000, delay: 150, distance: '100px', opacity: 0, scale: 1, reset: true });

sr.reveal('#full-image', { origin: 'bottom', duration: 600, delay: 50, distance: '50px', opacity: 0, scale: 1, reset: true });

sr.reveal('#travel-1', { origin: 'top', duration: 600, delay: 50, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#travel-2', { origin: 'top', duration: 600, delay: 50, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#travel-3', { origin: 'bottom', duration: 1000, delay: 50, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#travel-4', { origin: 'bottom', duration: 1000, delay: 50, distance: '50px', opacity: 0, scale: 1, reset: true });

sr.reveal('#rsvp', { origin: 'right', duration: 900, delay: 0, distance: '700px', opacity: 0, scale: 0.7, reset: true });

sr.reveal('#faq', { origin: 'bottom', duration: 600, delay: 150, distance: '50px', opacity: 0, scale: 1, reset: true });




