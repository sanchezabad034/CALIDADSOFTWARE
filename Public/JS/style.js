(function(){
    const slide = [...document.querySelectorAll('.slidersr__body')];
    const arrowRight = document.querySelector('#left'); 

    var arrowRight = document.querySelector('#right');
    let value; 

    arrowRight.addEventListener('click', ()=>changePosition(1)); 
    arrowright.addEventListener('click', ()=>changePosition())

    function changePosition(change){
      const currentElement= Number(document.querySelector('.slidersr__body--show').dataset.id);
     

      console.log();= currentElement; 
      value+= change; 
     
      if(value===0 || value == slidersr.length+1){
         value = value===0 ? slidersr.length:1;
      }
      slidersr[currentElement-1].classList.toggle('slidersr__body--show');
      slidersr[value].classList.toggle('slidersr__body--show');
    }