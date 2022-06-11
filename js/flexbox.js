$(window).on("load", function () {
  //console.log(view);
  $(".o-card_headerHeroImg").each(function () {
    var bg = $(this).attr("data-image");
    $(this).css({ "background-image": "url(" + bg + ")" });
  });


  $(document).on("click touch", ".o-card-headerList li", function (e) {
    e.stopPropagation();
    return false;
  });


  $('.o-card_paragraph').each(function () {
    var _this = $(this);
    var pHeight = _this.height();
    console.log(pHeight);
    _this.after('<span class="a-more"></span>')
  });

  $(document).on('click', '.a-more', function () {
    $(this).prev('p').toggleClass('isToggle');
    $(this).toggleClass('isActive');
  });

});

$(function () {
  $("#Content1-1").load("doc/doc1-1.html");
  $("#Content1-2").load("doc/doc1-2.html");
  $("#Content1-3").load("doc/doc1-3.html");
  $("#Content1-4").load("doc/doc1-4.html");
  $("#Content1-5").load("doc/doc1-5.html");
  $("#Content1-6").load("doc/doc1-6.html");
  $("#Content2-0").load("doc/doc2-0.html");
  $("#Content2-1").load("doc/doc2-1.html");
  $("#Content2-2").load("doc/doc2-2.html");
  $("#Content2-3").load("doc/doc2-3.html");
  $("#Content2-4").load("doc/doc2-4.html");
  $("#Content2-5").load("doc/doc2-5.html");
  $("#Content2-6").load("doc/doc2-6.html");
  $("#Content3-1").load("doc/doc3-1.html");
  $("#Content3-2").load("doc/doc3-2.html");
  $("#Content3-3").load("doc/doc3-3.html");
});

function rotateCard(btn) {
  var $card = $(btn).closest('.o-card_container');
  console.log($card);
  if ($card.hasClass('hover')) {
    $card.removeClass('hover');
  } else {
    $card.addClass('hover');
  }
}


