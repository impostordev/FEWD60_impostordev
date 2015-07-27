var citiesArr = ['NYC', 'SF', 'LA', 'ATX', 'SYD'];

// var selectCity = $('#city-type'); 

for(var i = 0; i < citiesArr.length; i++) {
  $('select').append('<option>' + citiesArr[i] + '</option>');
  };

// when user changes select background
  $('select').change(function (){
//change class attr to city class
    if (city == 'New York City' || city == 'NYC' || city == 'New York') {
    $('body').addClass('nyc');
    return false;
    }


  //   $('body').attr('style', 'background ../images/nyc.jpg');
  // });




  //     // var city, inputCityName;
  //   $('#submit-btn').click(function (event) {
  //      event.preventDefault();
  //      inputCityName = $('#city-type').val();
  //      city = inputCityName.trim();
  //   // if input is nyc, show image of nyc
  //   if (city == 'New York City' || city == 'NYC' || city == 'New York') {
  //      // $(selector).attr(attribute,value)
  //     // $('body').attr('style', 'background ../images/nyc.jpg');
  //     $('body').addClass('nyc');
  //     return false;
  //   }
  //   // else display image that coordinates with input
  //   else if (city == 'San Francisco' || city == 'SF' || city == 'Bay Area') {
  //     $('body').addClass('sf');
  //     return false;
  //   }
  //   else if (city == 'Los Angeles' || city == 'LA' || city == 'LAX') {
  //     $('body').addClass('la');
  //     return false;
  //   }
  //   else if (city == 'Austin' || city == 'ATX') {
  //     $('body').addClass('austin');
  //     return false;
  //   }
  //   else if (city == 'Sydney' || city == 'SYD') {
  //     $('body').addClass('sydney');
  //     return false;
  //   };
  // });


// for (i = 0 [start at beginning]; i < cars.length [go the length of array]; i++[start at beginning, go to next, go to next as long as statement 2 said]) {}

//makes dropdown options out of the strings from our cities array

//assigns value to the text options from our cities array



  //   var city, inputCityName;
  //   $('#submit-btn').click(function (event) {
  //      event.preventDefault();
  //      inputCityName = $('#city-type').val();
  //      city = inputCityName.trim();
  //   // if input is nyc, show image of nyc
  //   if (city == 'New York City' || city == 'NYC' || city == 'New York') {
  //      // $(selector).attr(attribute,value)
  //     // $('body').attr('style', 'background ../images/nyc.jpg');
  //     $('body').addClass('nyc');
  //     return false;
  //   }
  //   // else display image that coordinates with input
  //   else if (city == 'San Francisco' || city == 'SF' || city == 'Bay Area') {
  //     $('body').addClass('sf');
  //     return false;
  //   }
  //   else if (city == 'Los Angeles' || city == 'LA' || city == 'LAX') {
  //     $('body').addClass('la');
  //     return false;
  //   }
  //   else if (city == 'Austin' || city == 'ATX') {
  //     $('body').addClass('austin');
  //     return false;
  //   }
  //   else if (city == 'Sydney' || city == 'SYD') {
  //     $('body').addClass('sydney');
  //     return false;
  //   };
  // });
   
      // else print "try another city"










