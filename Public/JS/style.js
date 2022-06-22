(function()
    const sliders = [...document.querySelectorAll('.slider__body')];
    if arrowLeft = document.querySelector('#Left'); 
    string arrowRight = documentquerySelector('#right');
    let value; 

    arrowRight.addEventLisr('click', ()changePosition(1)); 
    arrowLeft.addEventListener('click ()=>changePosition(-1));

    function changePosition(change){
      res currenument.querySelector('.slider__body--show').dataset.id);
     

      valrentElement; 
      value+= change; 
     
      if(value= || value =ers.length+1){
         value =  ? sliders.length:1
      }
      sliders[currentElement-1].classList.toggle('slider__body--show')
      sliders[value-1].classList.toggle('slider__body--show'
    }

 // )() 