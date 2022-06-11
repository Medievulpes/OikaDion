/* 

Vanilla Template

https://templatemo.com/tm-526-vanilla

*/

jQuery(document).ready(function ($) {

  'use strict';

  var top_header = $('.parallax-content');
  top_header.css({ 'background-position': 'center center' }); // better use CSS
  if ($(window).width() > 767) {
    $(window).scroll(function () {
      var st = $(this).scrollTop();
      top_header.css({ 'background-position': 'center calc(50% + ' + (st * .5) + 'px)' });
    });
  }
  else { top_header.css({ 'background-position-x': '81%' }); }


  $('body').scrollspy({
    target: '.fixed-side-navbar',
    offset: 200
  });

  // smoothscroll on sidenav click

  $('.tabgroup > div').hide();
  $('.tabgroup > div:first-of-type').show();
  $('.tabs a').click(function (e) {
    e.preventDefault();
    var $this = $(this),
      tabgroup = '#' + $this.parents('.tabs').data('tabgroup'),
      others = $this.closest('li').siblings().children('a'),
      target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();

  })

  var owl = $("#owl-testimonials");

  owl.owlCarousel({

    pagination: true,
    paginationNumbers: false,
    autoPlay: 6000, //Set AutoPlay to 3 seconds
    items: 3, //10 items above 1000px browser width
    itemsDesktop: [1000, 3], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 2], // betweem 900px and 601px
    itemsTablet: [600, 1], //2 items between 600 and 0
    itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option

  });


});

jQuery(function () {

  if (!$.fn.imagezoomsl) {

    $('.msg').show();
    return;
  }
  else $('.msg').hide();

  // plugin initialization
  $('.info-image').imagezoomsl({

    innerzoommagnifier: true,
    classmagnifier: "round-loope",
    magnifiersize: [150, 150],
    // disables the scrolling of the document with the mouse wheel when the cursor is over the image
    disablewheel: false
  });
});

$(window).on('load', function () {
  $('#loading').hide();
})

function changeImg() {
  var image = document.getElementById('myImg');
  if (image.src.match("img/ad2.gif")) {
    image.src = "img/ad1.gif";
  }
  else {
    image.src = "img/ad2.gif";
  }
}

$(document).ready(function () {
  $(".musicOff").click(function () {
    var image = document.getElementById('myImg');
    var x = document.getElementById("audioFile");
    x.play();
    if (image.src.match("img/ad1.gif")) {
      image.src = "img/ad2.gif";
    }
    else {
      image.src = "img/ad1.gif";
      x.pause();
    }
  });
});

var playlist = Array("audio/ELEVATION.aac", "audio/FadedPhotograph.aac", "audio/TRISING!.aac");
var randomSong = playlist[Math.floor(Math.random() * playlist.length)];
var audioElement = document.getElementById('audioFile');
audioElement.setAttribute('src', randomSong);
