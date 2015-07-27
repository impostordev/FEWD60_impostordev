


document.getElementsByTagName("li")[0].addEventListener("mouseover",function(){
  if(!this.parentNode.getAttribute("class")){
    this.parentNode.setAttribute("class","slideDownIpad");
  }
  else{
    this.parentNode.removeAttribute("class");
  }
});

document.getElementsByTagName("li")[0].addEventListener("mouseout",function(){
  if(!this.parentNode.getAttribute("class")){
    this.parentNode.setAttribute("class","slideDownIpadNope");
  }
  else{
    this.parentNode.removeAttribute("class");
  }
});

// document.getElementsByTagName("li")[0].addEventListener("click",function(){
// 	if(!this.parentNode.getAttribute("class")){
// 		this.parentNode.setAttribute("class","slideDownIphone");
// 	}
// 	else{
// 		this.parentNode.removeAttribute("class");
// 	}
// });

// $("slideDownIpad").on('click', function() {
//   $(".slideDownIpad").attr('slideDownIphone', 'slideDownIpad');

// $("slideDownIpad").on('click', function() {
//   $(".slideDownIpad").attr('slideDownIphone', 'slideDownIpad');
// });






// $(window).resize(function(){
//   if $(window).width,768
//     $
// });