//= ../../bower_components/jquery/dist/jquery.js

$(function () {
  $(window).load(function() {
    $("#preloader").fadeOut('slow', function() {
      $(this).remove();
    }); 
  });
});