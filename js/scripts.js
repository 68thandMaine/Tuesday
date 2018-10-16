
$(document).ready(function() {
  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });

  $("button#white").click(function() {
    $("p").removeClass();
    $("p").addClass("white-text");
  });

});
