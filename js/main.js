$(document).ready(function () {
  $('#collapse_lti').load('schedule/lti.html');
  $('#collapse_ie').load('schedule/ie.html');
  $('#collapse_isc').load('schedule/isc.html');
  $('#collapse_ici').load('schedule/ici.html');



    /*=================================
     ||          Nivo-lightbox
     ==================================*/
    $('.gallery-item').nivoLightbox({
      effect: 'fade',                             // The effect to use when showing the lightbox
      theme: 'default',                             // The lightbox theme to use
      keyboardNav: true,                             // Enable/Disable keyboard navigation (left/right/escape)
      clickOverlayToClose: true,                    // If false clicking the "close" button will be the only way to close the lightbox
      onInit: function () {},// Callback when lightbox has loaded
      beforeShowLightbox: function () {},// Callback before the lightbox is shown
      afterShowLightbox: function (lightbox) {},// Callback after the lightbox is shown
      beforeHideLightbox: function () {},// Callback before the lightbox is hidden
        afterHideLightbox: function () {
        },             // Callback after the lightbox is hidden
        onPrev: function (element) {
        },                 // Callback when the lightbox gallery goes to previous item
        onNext: function (element) {
        },                 // Callback when the lightbox gallery goes to next item
        errorMessage: 'The requested content cannot be loaded. Please try again later.' // Error message when content can't be loaded
    });


    if($('.schedule_tabs').length) {
      $('.schedule_tabs a:first').click();
    }
});

$(document).on('click', '.schedule_expand', function(e){
  e.preventDefault();
  var targetContent = $(this).closest('.schedule_item').find('.panel-collapse');
  targetContent.toggleClass('in');
  $(this).toggleClass('collapsed');
});


// Countdown jquery

$(function () {
  var today = new Date();
  var austDay = new Date(2016,9-1,19,8,00,00,0);
  if(today>austDay){
    $("#countdown").hide();
  }else{
    $("#defaultCountdown").countdown(austDay, function(event) {
      $('#count_days').text(event.strftime('%d'));
      $('#count_hours').text(event.strftime('%H'));
      $('#count_minutes').text(event.strftime('%M'));
      $('#count_seconds').text(event.strftime('%S'));
    });
  }

});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

/*
 * Change Navbar color while scrolling
 */

$(window).scroll(function () {
    handleTopNavAnimation();
});

$(window).load(function () {
    handleTopNavAnimation();
});

function handleTopNavAnimation() {
    var top = $(window).scrollTop();

    if (top > 10) {
        $('#site-nav').addClass('navbar-solid');
    }
    else {
        $('#site-nav').removeClass('navbar-solid');
    }
}

$(function () {
  $('#navbar-items a[href*=#]:not([href=#]), a.inpage').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});
