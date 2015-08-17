$(document).ready(function() {
  // prevents code from executing until all DOM assets have been loaded
  console.log('ready!');
    // var hashtagInputOne, hashtagInputTwo, hashtagInputThree
    function clearInputs(){
      $("#hashtagOne").val('');
      $("#hashtagTwo").val('');
      $("#hashtagThree").val('');
    };
    
    $('#submit-btn').on('click', function(event) {
      event.preventDefault();
      // hide old screen (class), display new screen (class), clear inputs
    $('#twitter_screen').hide();
    $("#screen_2").css("display", "block");
    $('#submit-btn').hide();
    $("#submit-again").css("display", "block");
    clearInputs();
  });
    $('#submit-again').on('click', function(event) {
      event.preventDefault();
      clearInputs();
    });
});
