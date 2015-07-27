// var url = "api address" + cityNameVar;
//   $('input').val()';

// $("#submit-button").click(function() {
//   alert("Handler for .click() called");
// });


$(function () {
  $("#submit-button").click(function() {  
    var cityName = $('#cityNameInput').val();
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName;
    console.log(cityName);

  $.ajax({
    type: 'GET',
    url: url,
    dataType: 'jsonp', 


  )};
  });

});



http://api.openweathermap.org/data/2.5/weather?q=<CITYNAME>

console.log()