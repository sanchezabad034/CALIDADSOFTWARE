 let slider = document.querySelector(".container");
 let slidertext= document.querySelectorAll(".slider__text");
 let img= document.querySelectorAll(".slider__img");

 let contador =3;
 let width = slidertext[0].clientWidth;

 let intervalo= 5000;

 window.addEventListener("resize", function(){
      width = slidertext[0].clientWidth;
 });

 setInterval(function(){
      slides();
 }, intervalo);

 function slides(){
      slider.style.transform="translate("+(-width*contador)+"px)";
      slider.style.transition="transform 3s";
      contador++;
 }