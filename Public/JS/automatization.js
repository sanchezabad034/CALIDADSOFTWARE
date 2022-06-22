<<<<<<< HEAD
 let slider = document.querySelector(".container");
 let slidertext= document.querySelectorAll(".slider__text");
 let img= document.querySelectorAll(".slider__img");

 let contador =3;
 let width = slidertext[0].clientWidth;

 let intervalo= 5000;
=======
//  let slider = document.querySelector(".container");
 let slidertext= document.querySelectorAll(".slider__text");
 let img= document.querySelectorAll(".slider__img");

let contador =1;
let width = slidertext[0].clientWidth;

 let intervalo= 3000;
>>>>>>> fa65f6862c91acf4c521c5b2fee5fcebe6282952

 window.addEventListener("resize", function(){
      width = slidertext[0].clientWidth;
 });
<<<<<<< HEAD

 setInterval(function(){
      slides();
 }, intervalo);

 function slides(){
      slider.style.transform="translate("+(-width*contador)+"px)";
      slider.style.transition="transform 3s";
=======
 setInterval(function(){
      slides();
 }, intervalo);

 function slides(){
           slider.style.transform="translate("+(-width*contador)+"px)";
   slider.style.transition="transform 3s";
>>>>>>> fa65f6862c91acf4c521c5b2fee5fcebe6282952
      contador++;
 }