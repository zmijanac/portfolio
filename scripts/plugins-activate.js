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

function cacheName() {
  let name = document.querySelector('#someName').value;
  if (name != "" && name != null) {
    document.cookie = name;
    console.log(name);
  };
};

function cacheName1() {
  let name1 = document.querySelector('#someName1').value;
  if (name1 != "" && name1 != null) {
    document.cookie = name1;
    console.log(name);
  };
};

function cacheName2() {
  let name2 = document.querySelector('#someName2').value;
  if (name2 != "" && name2 != null) {
    document.cookie = name2;
    console.log(name2);
  };
};

function cacheName3() {
  let name3 = document.querySelector('#someName3').value;
  if (name3 != "" && name3 != null) {
    document.cookie = name3;
    console.log(name3);
  };
};

function cacheName4() {
  let name4 = document.querySelector('#someName4').value;
  if (name4 != "" && name4 != null) {
    document.cookie = name4;
    console.log(name4);
  };
};

let tnxName = document.cookie;
