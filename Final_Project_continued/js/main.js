$(document).ready(function() {
  // prevents code from executing until all DOM assets have been loaded
  console.log('ready!');
    // var hashtagInputOne, hashtagInputTwo, hashtagInputThree
    function clearInputs(){
      $("#hashtagOne").val('');
      $("#hashtagTwo").val('');
      $("#hashtagThree").val('');
    };
    Places.GeoDataApi.getPlaceById(mGoogleApiClient, placeId)
        .setResultCallback(new ResultCallback<PlaceBuffer>() {
      @Override
      public void onResult(PlaceBuffer places) {
        if (places.getStatus().isSuccess()) {
          final Place myPlace = places.get(0);
          Log.i(TAG, "Place found: " + myPlace.getName());
        }
        places.release();
      }
    });

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
