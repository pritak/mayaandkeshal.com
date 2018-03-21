$(document).ready(function () {
  var scrollTop = 0;
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
    $('.counter').html(scrollTop);

    if (scrollTop >= 200) {
      $('#global-nav').addClass('scrolled-nav');
    } else if (scrollTop < 200) {
      $('#global-nav').removeClass('scrolled-nav');
    }

  });

});

$(document).ready(function () {
  $(document).on("scroll", onScroll);
  
  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      
      $('a').each(function () {
          $(this).removeClass('is-active');
      })
      $(this).addClass('is-active');
    
      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top+1
      }, 700, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('#main-menu a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('#main-menu a').removeClass("is-active");
          currLink.addClass("is-active");
      }
      else{
          currLink.removeClass("is-active");
      }
  });
}

(function($) {
  $(document).ready(function() {
      var navChildren = $("#top-menu li").children();
      var aArray = [];
      for (var i = 0; i < navChildren.length; i++) {
          var aChild = navChildren[i];
          var ahref = $(aChild).attr('href');
          aArray.push(ahref);
      }
      $(window).scroll(function() {
          var windowPos = $(window).scrollTop();
          var windowHeight = $(window).height();
          var docHeight = $(document).height();
          for (var i = 0; i < aArray.length; i++) {
              var theID = aArray[i];
              var secPosition = $(theID).offset().top;
              secPosition = secPosition - 135;
              var divHeight = $(theID).height();
              divHeight = divHeight + 90;
              if (windowPos >= secPosition && windowPos < (secPosition + divHeight)) {
                  $("a[href='" + theID + "']").parent().addClass("active");
              } else {
                  $("a[href='" + theID + "']").parent().removeClass("active");
              }
          }
      });
   
  });
  })(jQuery);


$(window).bind("mousewheel", function () {
  $("html, body").stop();
});

window.sr = ScrollReveal();
sr.reveal('#main-2', { origin: 'right', duration: 600, delay: 50, distance: '100px', opacity: 0, scale: 0.7, reset: true });

sr.reveal('#couple-1', { origin: 'top', duration: 1000, delay: 100, distance: '200px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-2', { origin: 'top', duration: 1000, delay: 100, distance: '200px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-3', { origin: 'top', duration: 600, delay: 50, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-4', { origin: 'right', duration: 600, delay: 50, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-5', { origin: 'left', duration: 600, delay: 50, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-6', { origin: 'top', duration: 600, delay: 50, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-7', { origin: 'right', duration: 600, delay: 50, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-8', { origin: 'left', duration: 600, delay: 50, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-9', { origin: 'top', duration: 600, delay: 50, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#couple-10', { origin: 'top', duration: 600, delay: 50, distance: '50px', opacity: 0, scale: 1, reset: true });

sr.reveal('#schedule', { origin: 'top', duration: 600, delay: 150, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#schedule-1', { origin: 'left', duration: 600, delay: 150, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#schedule-2', { origin: 'right', duration: 1000, delay: 150, distance: '100px', opacity: 0, scale: 1, reset: true });

sr.reveal('#full-image', { origin: 'top', duration: 600, delay: 50, distance: '50px', opacity: 0, scale: 1, reset: true });

sr.reveal('#travel-1', { origin: 'top', duration: 600, delay: 50, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#travel-2', { origin: 'top', duration: 600, delay: 50, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#travel-3', { origin: 'top', duration: 1000, delay: 50, distance: '50px', opacity: 0, scale: 1, reset: true });
sr.reveal('#travel-4', { origin: 'top', duration: 1000, delay: 50, distance: '50px', opacity: 0, scale: 1, reset: true });

sr.reveal('#rsvp', { origin: 'right', duration: 900, delay: 0, distance: '700px', opacity: 0, scale: 0.7, reset: true });

sr.reveal('#faq', { origin: 'top', duration: 600, delay: 150, distance: '50px', opacity: 0, scale: 1, reset: true });




