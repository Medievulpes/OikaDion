// Get Color Attribute
// Set the background book color
$("li.book-item").each(function() {
  var $this = $(this);

  $this.find(".bk-front > div").css('background-color', $(this).data("color"));
  $this.find(".bk-left").css('background-color', $(this).data("color"));
  $this.find(".back-color").css('background-color', $(this).data("color"));

  $this.find(".item-details a.button").on('click', function() {
    displayBookDetails($this);
  });
});

function displayBookDetails(el) {
  var $this = $(el);
  $('.main-container').addClass('prevent-scroll');
  $('.main-overlay').fadeIn();

  $this.find('.overlay-details').clone().prependTo('.main-overlay');

  $('a.close-overlay-btn').on('click', function(e) {
    e.preventDefault();
    $('.main-container').removeClass('prevent-scroll');
    $('.main-overlay').fadeOut();
    $('.main-overlay').find('.overlay-details').remove();
  });

  $('.main-overlay a.preview').on('click', function() {
    $('.main-overlay .overlay-desc').toggleClass('activated');
    $('.main-overlay .overlay-preview').toggleClass('activated');
  });

  $('.main-overlay a.back-preview-btn').on('click', function() {
    $('.main-overlay .overlay-desc').toggleClass('activated');
    $('.main-overlay .overlay-preview').toggleClass('activated');
  });
}

// Dionimg change
$('#btnClickd').on('click',function(){

  if($('#dionimg').css('display')!='none'){

  $('#dionimgwoglass').html($('#staticd').html()).show().siblings('div').hide();
      
  }else if($('#dionimgwoglass').css('display')!='none'){

      $('#dionimg').show().siblings('div').hide();

  }
});

// Toruimg change
/*
      jQuery event that triggers when the button is pressed
      # is an ID jQuery selector, usage:#anyElementId
      */
$('#btnClickt').on('click',function(){
          
  /*
  In CSS, you can check if an element is visible by checking if the property display value is different from none, because if it's value is none, it will not be visible
  */
  if($('#toruimg').css('display')!='none'){
  /*    
  So, if div 1 is visible, the condition will be true
  */
  $('#toruimgwoglass').html($('#statict').html()).show().siblings('div').hide();
          
  /*
  When you use it with parameter, example:
  .html('<div><b>Any</b> plain text or HTML you want here.</div>')
  It set the element HTML to whatever you put on it's parameter
  
  When you use the method .html() without parameter, it returns the element HTML, so by using $('#static').html(), it will return the HTML from the DIV with ID static.
  
  So I'm setting the DIV 2 HTML to whatever is static HTML
  
  Right after setting the HTML, I use .show() to show div 2, and right after that I use .siblings('div').hide(), to hide any DIV siblings of the one I've just have showed up.
  
  In jQuery, you can use methods to run synchronously, concatenating them with dots, example:
  $('#div1').show().siblings('div').hide();
  
  In this example it will show #div1 then right after that search for it div siblings and hide them.
  */
  }else if($('#toruimgwoglass').css('display')!='none'){
  /*    
  Condition to check if DIV 2 is visible
  */
      $('#toruimg').show().siblings('div').hide();
  /*    
  If it is, it will show DIV 1 and right after that will search for it siblings and hide them with .siblings('div').hide();
  */
  }
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".fixed-side-navbar a, .primary-button a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("city");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  document.getElementById(cityName).style.display = "block";  
}
