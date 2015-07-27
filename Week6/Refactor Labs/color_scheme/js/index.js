// setting and naming function
function switchTheme() {
  // set up variable to hold function. jquery is looking for variable this and evoking the object 
  var theme = $(this).attr('class');
  console.log($(this));
  //when function runs, set body to class name. now class anme for body is same as theme
  $('body').attr('class', theme);
}

// tell page when document is ready
$(document).ready(function(){
  //on click, set event listener to invoke the object (switcher li) and call function switchTheme
  $('#switcher li').on('click', switchTheme);
});




// $('#grayButton').click(switchGray);
// $('#whiteButton').click(switchWhite);
// $('#blueButton').click(switchBlue);
// $('#yellowButton').click(switchYellow);

// function switchGray() {
//   $('body').attr('class', 'gray');
// }

// function switchWhite() {
//   $('body').attr('class', 'white');
// }

// function switchBlue() {
//   $('body').attr('class', 'blue');
// }

// function switchYellow() {
//   $('body').attr('class', 'yellow');
// }