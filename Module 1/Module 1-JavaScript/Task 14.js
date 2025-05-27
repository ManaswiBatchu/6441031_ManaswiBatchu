// jQuery event handling and effects
$("#registerBtn").click(function() {
  // Example: fade out an event card on register
  $(".eventCard").fadeOut(500, function() {
    alert("Thanks for registering!");
  });
});

// To fade in the event cards again somewhere else
$(".eventCard").fadeIn(500);
