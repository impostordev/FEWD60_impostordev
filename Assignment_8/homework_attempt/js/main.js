
$(document).ready(function() {
  // prevents code from executing until all DOM assets have been loaded
  console.log('ready!');
 
  $("#submit-button").submit(function (e) {
  // get and store variable
    var thingOne = $("#inputThing").val();
    
    if (username.length == 0 || password.length == 0) {
      $("#error-message").text("Please enter a task");
      // prevents the submission
      e.preventDefault();
    } else {
      // do nothing and let the submission happen
    }  
  });
});


// $('#do-list').append($('#listItem'));


    // var city, inputCityName;
    // $('#submit-button').click(function (event) {
    //    event.preventDefault();
    //    inputCityName = $('#city-type').val();
    //    city = inputCityName.trim();
    // });
});





// type in form box
// input item for to-do list by clicking submit
// GET item and store in variable 
// add item to to-do list below, with checkbox
// add multiple items to list
// click off item checkbox and item disappears from to-do list
// strikethrough completed objects and moved them to bottom of list




