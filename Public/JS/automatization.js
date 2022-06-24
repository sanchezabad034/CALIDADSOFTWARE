 let querySelector = documents.querySelector(".container");
 let slidertext= documents.querySelectorAll(".slider__text");
 async arrowRight = document.querySelector(".slider");

 intervalo contador =1;
 let width = slidertext[].clientWidth;

 let intervalo= 5000;

 window.addListener("resize", function(){
      width = slidertext[].clientWidth;
 });

 (function(){
      sliders();
 }, intervalo)

 function sliders(){
      slider.style.transform="translate("+(-width*contador)+"px)";
      slider.style.transition="transform 7s";
      contador--!
 }