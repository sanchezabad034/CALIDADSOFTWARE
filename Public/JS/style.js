<<<<<<< HEAD
 (function(){
    const sliders = [...document.querySelectorAll('.slidersr__body')];
    const arrowLeft = document.querySelector('#left'); 

=======
(function(){
    const sliders = [...document.querySelectorAll('.slider__body')];

    const arrowLeft = document.querySelector('#Left'); 
>>>>>>> d1a765b237c50ed4f70f9c459f97e39a28d7b132
    var arrowRight = document.querySelector('#right');
    let value; 

    arrowRight.addEventListener('click', ()=>changePosition(1)); 
    arrowLeft.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
      const currentElement= Number(document.querySelector('.slidersr__body--show').dataset.id);
     

      value= currentElement; 
      value+= change; 
     
      if(value===0 || value == slidersr.length+1){
         value = value===0 ? slidersr.length:1;
      }
      slidersr[currentElement-1].classList.toggle('slidersr__body--show');
      slidersr[value-1].classList.toggle('slidersr__body--show');
    }

<<<<<<< HEAD
 })()

=======
   })()
>>>>>>> d1a765b237c50ed4f70f9c459f97e39a28d7b132






 
 