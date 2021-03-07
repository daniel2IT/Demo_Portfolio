  document.getElementById("myDIV").classList.add("rounded-circle");
  document.getElementById("myDIV1").classList.add("rounded-pill");
  document.getElementById("myDIV2").classList.add("rounded-right");

$(document).ready(function(){
  $("b").mouseover(function(){
    $("b").css("background-color", "#ff0018e6");
     $("b").css("color", "black");
  });
  $("b").mouseout(function(){
    $("b").css("background-color", "inherit");
     $("b").css("color", "inherit");
  });
});


$('.carousel').carousel({
  interval: 1000000
})

