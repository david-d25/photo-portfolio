//= ../../bower_components/jquery/dist/jquery.js
//= ../../bower_components/autosize/dist/autosize.js
//= ../../bower_components/handlebars/handlebars.min.js

//= lib/easing
//= lib/parallax
//= lib/slick

$(function ()
{
  $(window).load(function()
  {
    $("#preloader").fadeOut('slow', function() {
      $(this).remove();
    });

    autosize($('textarea'));

    //= partials/runAnimations
    //= partials/autoscroll
    //= partials/changeBackground
    //= partials/fillPortfolio
    //= partials/validateForm
  });
});