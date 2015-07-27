// nav bar effects
// is there a way to consolidate these? I could only make it work by talking to each nav item and button individually

var linkA = document.getElementById('link1');

linkA.addEventListener('mouseover', function(){
  linkA.setAttribute('style', 'color: gray;');
});

linkA.addEventListener('mouseout', function(){
  linkA.setAttribute('style', 'color: white;');
});

var linkB = document.getElementById('link2');

linkB.addEventListener('mouseover', function(){
  linkB.setAttribute('style', 'color: gray;');
});

linkB.addEventListener('mouseout', function(){
  linkB.setAttribute('style', 'color: white;');
});

var linkC = document.getElementById('link3');

linkC.addEventListener('mouseover', function(){
  linkC.setAttribute('style', 'color: gray;');
});

linkC.addEventListener('mouseout', function(){
  linkC.setAttribute('style', 'color: white;');
});

var linkD = document.getElementById('link4');

linkD.addEventListener('mouseover', function(){
  linkD.setAttribute('style', 'color: gray;');
});

linkD.addEventListener('mouseout', function(){
  linkD.setAttribute('style', 'color: white;');
});

var linkE = document.getElementById('link5');

linkE.addEventListener('mouseover', function(){
  linkE.setAttribute('style', 'color: gray;');
});

linkE.addEventListener('mouseout', function(){
  linkE.setAttribute('style', 'color: white;');
});

// button effects
// is there a way to consolidate these? I could only make it work by talking to each nav item and button individually

var buttonA = document.getElementById('button1');

buttonA.addEventListener('mouseover', function(){
  buttonA.setAttribute('style', 'background-color: gray;');
});

buttonA.addEventListener('mouseout', function(){
  buttonA.setAttribute('style', 'background-color: #fbf962;');
});

var buttonB = document.getElementById('button2');

buttonB.addEventListener('mouseover', function(){
  buttonB.setAttribute('style', 'background-color: gray;');
});

buttonB.addEventListener('mouseout', function(){
  buttonB.setAttribute('style', 'background-color: #c6c6c6;');
});

var buttonC = document.getElementById('button3');

buttonC.addEventListener('mouseover', function(){
  buttonC.setAttribute('style', 'background-color: gray;');
});

buttonC.addEventListener('mouseout', function(){
  buttonC.setAttribute('style', 'background-color: #c6c6c6;');
});

var buttonD = document.getElementById('button4');

buttonD.addEventListener('mouseover', function(){
  buttonD.setAttribute('style', 'background-color: gray;');
});

buttonD.addEventListener('mouseout', function(){
  buttonD.setAttribute('style', 'background-color: #c6c6c6;');
});