$(window).on("load", function() {
  //console.log(view);
  $(".o-card_headerHeroImg").each(function() {
    var bg = $(this).attr("data-image");
    $(this).css({ "background-image": "url(" + bg + ")" });
  });

  
  $(document).on("click touch", ".o-card-headerList li", function(e) {
    e.stopPropagation();
    return false;
  });
  
  
  $('.o-card_paragraph').each(function(){
    var _this = $(this);
    var pHeight = _this.height();
    console.log(pHeight);
    _this.after('<span class="a-more"></span>')
  });
  
  $(document).on( 'click' , '.a-more' , function(){
    $(this).prev('p').toggleClass('isToggle');
    $(this).toggleClass('isActive');
  });
  
});