$(document).ready(function() {
  // prevents code from executing until all DOM assets have been loaded
  console.log( "ready!" );
    var city, inputCityName;
    $('#submit-btn').click(function (event) {
       event.preventDefault();
       inputCityName = $('#city-type').val();
       city = inputCityName.trim();
    // if input is nyc, show image of nyc
    if (city == 'New York City' || city == 'NYC' || city == 'New York') {
       // $(selector).attr(attribute,value)
      $('body').attr('class', 'nyc');
      // $('body').addClass('nyc'); adds new class on top of class. change class is better.
    }
    // else display image that coordinates with input
    else if (city == 'San Francisco' || city == 'SF' || city == 'Bay Area') {
      $('body').attr('class', 'sf');
    }
    else if (city == 'Los Angeles' || city == 'LA' || city == 'LAX') {
      $('body').attr('class', 'la');
    }
    else if (city == 'Austin' || city == 'ATX') {
      $('body').attr('class', 'austin');
    }
    else if (city == 'Sydney' || city == 'SYD') {
      $('body').attr('class', 'sydney');
    };
    });
});
   
    // add a conditional for else print "try another city"










