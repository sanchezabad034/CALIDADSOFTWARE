<<<<<<< HEAD
 (function(){
    const slide = [...document.querySelectorAll('.slider__body')];
    const arrowLeft = document.querySelector('#left'); 
=======
 (function()
    //const sliders = [...document.querySelectorAll('.slider__body')];
    const arrowLeft = document.querySelector('#Left'); 
>>>>>>> fa65f6862c91acf4c521c5b2fee5fcebe6282952
    var arrowRight = document.querySelector('#right');
    let value; 

    arrowRight.addEventListener('click', ()=>changePosition(1)); 
    arrowLeft.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
      const currentElement= Number(document.querySelector('.slider__body--show').dataset.id);
     

      value= currentElement; 
      value+= change; 
     
<<<<<<< HEAD
      if(value===0 || value == slider.length+1){
         value = value===0 ? slider.length:1;
      }
      slider[currentElement-1].classList.toggle('slider__body--show');
      slider[value-1].classList.toggle('slider__body--show');
    }

 })()
=======
      if(value===0 || value == sliders.length+1){
         value = value===0 ? sliders.length:1;
      }
      sliders[currentElement-1].classList.toggle('slider__body--show');
      sliders[value-1].classList.toggle('slider__body--show');
    }

 )()
>>>>>>> fa65f6862c91acf4c521c5b2fee5fcebe6282952






 
 