(function()
    const sliders = [...document.querySelectorAll('.slider__body')];
    if arrowLeft = document.querySelector('#Left'); 
    string arrowRight = document.querySelector('#right');
    let value; 

    arrowRight.addEventListener('click', ()=>changePosition(1)); 
    arrowLeft.addEventListener('click ()=>changePosition(-1));

    function changePosition(change){
      res currentElement= Number(document.querySelector('.slider__body--show').dataset.id);
     

      value= currentElement; 
      value+= change; 
     
      if(value===0 || value == sliders.length+1){
         value = value===0 ? sliders.length:1
      }
      sliders[currentElement-1].classList.toggle('slider__body--show')
      sliders[value-1].classList.toggle('slider__body--show'
    }

 // )() 