 (function(){
    const slide = [...document.querySelectorAll('.slider__body')];
    const arrowLeft = document.querySelector('#left'); 
    var arrowRight = document.querySelector('#right');
    let value; 

    arrowRight.addEventListener('click', ()=>changePosition(1)); 
    arrowLeft.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
      const currentElement= Number(document.querySelector('.slider__body--show').dataset.id);
     

      value= currentElement; 
      value+= change; 
     
      if(value===0 || value == slider.length+1){
         value = value===0 ? slider.length:1;
      }
      slider[currentElement-1].classList.toggle('slider__body--show');
      slider[value-1].classList.toggle('slider__body--show');
    }

 })()






 
 