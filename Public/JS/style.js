 (function(){
    const sliders = [...document.querySelectorAll('.slidersr__body')];
    const arrowLeft = document.querySelector('#left'); 

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

 })()







 
 