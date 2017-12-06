$(document).ready(function() {

  /*******Nice Scroll******/
  $("html").niceScroll();  // The document page (body)
  $(".scroller").getNiceScroll().resize()

  /****Smooth Scrolling***/
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
      var target = $(this.hash);

      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({scrollTop: target.offset().top}, 500);
        return false;
      }
    }
  });

  $('#quest-submit').on('click', function () {
    var num = parseInt($('#quest_input').prop('value'));
    if (num <= 0 || num > 305) alert('The number should be a positive integer smaller than 305');
    else {
      window.location.href = "/t0/" + num;
    }
  });

  $('#switch > .dropdown > a').on('click', function () {
      var modeEl = $('#mode');

      modeEl.text($(this).text());
  });
});

