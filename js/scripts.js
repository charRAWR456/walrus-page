$(document).ready(function(){
  $(".clickable").click(function(){
    $("#initially-showing").fadeToggle();
    $("#initially-hidden").fadeToggle();
    });

  $(".clickable-about").click(function(){
    $("#slide-test").slideToggle();
  });
});
