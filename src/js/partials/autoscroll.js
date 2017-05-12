$(function() {
  $('a[href^="#"]').click(function() {
    clickElement = $(this).attr("href");
    destination = $(clickElement).offset().top;
    jQuery.easing.def = "easeInOutQuint";
    $('body, html').animate( {scrollTop: destination}, 1200);
    return false;
  });
});