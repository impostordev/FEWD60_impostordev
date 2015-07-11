    var city, inputCityName;
    $('#submit-btn').click(function (event) {
       event.preventDefault();
       inputCityName = $('#city-type').val();
       city = inputCityName.trim();
    // if input is nyc, show image of nyc
    if (city == 'New York City' || city == 'NYC' || city == 'New York') {
       // $(selector).attr(attribute,value)
      // $('body').attr('style', 'background ../images/nyc.jpg');
      $('body').addClass('nyc');
      return false;
    }
    // else display image that coordinates with input
    else if (city == 'San Francisco' || city == 'SF' || city == 'Bay Area') {
      $('body').addClass('sf');
      return false;
    }
    else if (city == 'Los Angeles' || city == 'LA' || city == 'LAX') {
      $('body').addClass('la');
      return false;
    }
    else if (city == 'Austin' || city == 'ATX') {
      $('body').addClass('austin');
      return false;
    }
    else if (city == 'Sydney' || city == 'SYD') {
      $('body').addClass('sydney');
      return false;
    };
  });
   
      // else print "try another city"


// Use $.on(submit) or $.click to figure out when the user clicks the "submit" button
// Call $.val() on inputs to get the string value of your user's input
// Store user input in var city
// Prevent a form submission using the event.preventDefault() function
// Create if / else if / else conditionals to control the flow of your application
// Use the || operator in your conditionals to allow for multiple string values to execute if/else if statement code
// Get the first element from an attribute name using $.attr()
// If a user submits "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
// If a user submits "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
// If a user submits "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
// If a user submits "Austin" or "ATX" make the background of the page austin.jpg
// If a user submits "Sydney" or "SYD" make the background of the page sydney.jpg


// Write at least six different lines of pseudocode and display them inline as JavaScript comments
// Use the $.ready() handler to delay your code from executing until all DOM assets have been loaded











