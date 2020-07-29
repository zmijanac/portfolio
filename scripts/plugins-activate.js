(function($jq) {
  $jq(document).ready(function() {
    // Closes the sidebar menu
    $jq(".menu-toggle").click(function(e) {
      e.preventDefault();
      $jq("#sidebar-wrapper").toggleClass("active");
      $jq(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
      $jq(this).toggleClass("active");
    });
    // Smoothscroll script
    $jq(".smooth-scroll").click(function(e) {
      e.preventDefault();
      var dis = $jq(this),
        target = dis.attr("href"),
        offset = parseInt($jq(target).offset().top),
        header = $jq(".sidebar-nav");
      dis.addClass("active").parent().siblings().find(".smooth-scroll").removeClass("active");
      $jq('html,body').stop().animate({ scrollTop: offset }, 200);
      $jq(".menu-toggle").trigger("click");
    });
    // Closes responsive menu when a scroll trigger link is clicked
    $jq('#sidebar-wrapper .js-scroll-trigger').click(function() {
      $jq("#sidebar-wrapper").removeClass("active");
      $jq(".menu-toggle").removeClass("active");
      $jq(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    });
  });
})(jQuery)

// togle flip cards
function flip1() {
  $('.card1').toggleClass('flipped');
}
function flip2() {
  $('.card2').toggleClass('flipped');
}
function flip3() {
  $('.card3').toggleClass('flipped');
}
function flip4() {
  $('.card4').toggleClass('flipped');
}
