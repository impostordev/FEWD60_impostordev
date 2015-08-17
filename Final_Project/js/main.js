$(document).ready(function() {
  // prevents code from executing until all DOM assets have been loaded
  console.log('ready!');
    function clearInputs(){
      // get values from three hashtag inputs
      $("#hashtagOne").val('');
      $("#hashtagTwo").val('');
      $("#hashtagThree").val('');
    };
    //don't do dropdown, figure out Google Maps API. this translates any user input into a recognizable location. build on what Google has already built instead of starting from scratch
    Places.GeoDataApi.getPlaceById(mGoogleApiClient, placeId)
        .setResultCallback(new ResultCallback<PlaceBuffer>() {
          //PlaceBuffer unrecognized. sort this out.
      @Override
      public void onResult(PlaceBuffer places) {
        if (places.getStatus().isSuccess()) {
          final Place myPlace = places.get(0);
          Log.i(TAG, "Place found: " + myPlace.getName());
        }
        places.release();
        //release the place so a new one can be input on next search
      }
    });

      $('#submit-btn').on('click', function(event) {
        event.preventDefault();
        // hide old screen (class), display new screen (class), clear inputs
      $('#twitter_screen').hide();
        //changing the display mode by css class
      $("#screen_2").css("display", "block");
      $('#submit-btn').hide();
      $("#submit-again").css("display", "block");
        clearInputs();
    });
      $('#submit-again').on('click', function(event) {
        event.preventDefault();
        clearInputs();
        //clear inputs again as part of preventDefault
    });
});
