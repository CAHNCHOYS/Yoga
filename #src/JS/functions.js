
let _slideUp = (target, duration) => {
    target.style.transitionProperty = 'height, margin, padding'; /* [1.1] */
    target.style.transitionDuration = duration + 'ms'; /* [1.2] */
 
    target.style.height = target.offsetHeight + 'px'; /* [3] */
    target.offsetHeight;
    target.style.overflow = 'hidden'; /* [7] */
    target.style.height = 0; /* [4] */
target.style.paddingTop = 0; /* [5.1] */
target.style.paddingBottom = 0; /* [5.2] */
target.style.marginTop = 0; /* [6.1] */
target.style.marginBottom = 0; /* [7.2] */

window.setTimeout( () => {
    target.style.display = 'none'; /* [8] */
    target.style.removeProperty('height'); /* [9] */
    target.style.removeProperty('padding-top');  /* [10.1] */ 
    target.style.removeProperty('padding-bottom');  /* [10.2] */ 
    target.style.removeProperty('margin-top');  /* [11.1] */ 
    target.style.removeProperty('margin-bottom');  /* [11.2] */ 
    target.style.removeProperty('overflow');  /* [12] */ 
    target.style.removeProperty('transition-duration');  /* [13.1] */ 
    target.style.removeProperty('transition-property');  /* [13.2] */ 
  }, duration);
  }





  let _slideDown = (target, duration) => {
    
    target.style.removeProperty('display'); /* [1] */
    let display = window.getComputedStyle(target).display;
    if (display === 'none') { /* [2] */
      display = 'block';
    }
     target.style.display=display;
    let height = target.offsetHeight; /* [3] */
    target.style.overflow = 'hidden'; /* [7] */ 
    target.style.height = 0; /* [4] */
    target.style.paddingTop = 0; /* [5.1] */
    target.style.paddingBottom = 0; /* [5.2] */ 
    target.style.marginTop = 0; /* [6.1] */ 
    target.style.marginBottom = 0; /* [6.2] */ 
    target.offsetHeight;
    
target.style.transitionProperty = "height, margin, padding";  /* [9.1] */ 
target.style.transitionDuration = duration + 'ms'; /* [9.2] */
target.style.height = height + 'px'; /* [10] */
target.style.removeProperty('padding-top'); /* [11.1] */ 
target.style.removeProperty('padding-bottom'); /* [11.2] */ 
target.style.removeProperty('margin-top'); /* [12.1] */ 
target.style.removeProperty('margin-bottom'); /* [12.2] */
window.setTimeout( () => {
    target.style.removeProperty('height'); /* [13] */
    target.style.removeProperty('overflow'); /* [14] */
    target.style.removeProperty('transition-duration'); /* [15.1] */
    target.style.removeProperty('transition-property'); /* [15.2] */
  }, duration);
  }





let _slideToggle = (target, duration = 500) => {
    
    if (window.getComputedStyle(target).display === 'none') {
      return _slideDown(target, duration);
    } else {
      return _slideUp(target, duration);
    }
  }
//Адаптивные изображения
  function ibg(){

    let ibg=document.querySelectorAll("._ibg");
    for (var i = 0; i < ibg.length; i++) {
    if(ibg[i].querySelector('img')){
    ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
    }
    }
    }
    
    ibg();


    
// Заполнение инпутов с емейлом
let errorDiv = document.createElement('div');
const emailInputs = document.querySelectorAll('.email-input');
if(emailInputs.length > 0){
for (const emailInput of emailInputs) {
      emailInput.addEventListener('blur',function(event){
         if(event.target.value.length<4 || !event.target.value.includes('@')){
           console.log(55);
           emailInput.classList.add('error');
         
           errorDiv.innerHTML = `<span> ${emailInput.getAttribute('data-message')}</span>`;
           errorDiv.classList.add('error-block');
           const inputCoords = emailInput.getBoundingClientRect();
           let topCoords = inputCoords.bottom+pageYOffset;
           let leftCoords = inputCoords.left + pageXOffset;
           errorDiv.style.top = topCoords + 'px';
           errorDiv.style.left = leftCoords + 'px';
           document.body.insertAdjacentElement('afterend',errorDiv);

         }
      });
      emailInput.addEventListener('focus',function(event){
        if(emailInput.classList.contains('error')){
          emailInput.classList.remove('error');
        }
        errorDiv.remove();
     });

    }


}




//Анимация при скоре (добавление класа при достижении 1/4 блока)
const anim_items  = document.querySelectorAll('._anim-items');
if(anim_items.length>0){
    
      window.addEventListener('scroll',animOnScroll);
    function animOnScroll(params) {
        for (let index = 0; index < anim_items.length; index++) {
            const animElement = anim_items[index];
            const animElementHeigt = animElement.offsetHeight;
            const animItemOffset = offset(animElement).top;
            const animStart = 4;


            let animStartPoint = document.documentElement.clientHeight  - animElementHeigt / animStart;
            if(animElementHeigt > document.documentElement.clientHeight ){
                   animStartPoint = document.documentElement.clientHeight  - document.documentElement.clientHeight / animStart;
            } 
            if((pageYOffset > animItemOffset - animStartPoint) && pageYOffset < (animItemOffset+animElementHeigt)){
               animElement.classList.add('_active');
            }else{
                if(!animElement.classList.contains('_noAnimAgain'))
                animElement.classList.remove('_active');
            }
        }

    }


    function offset(el) {
        
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return {    top:rect.top + scrollTop,left: rect.left + scrollLeft}
    }

   setTimeout(() => {
    animOnScroll();
   }, 300);
   
}

//==================================================================================


//Проверка поддерживает ли браузер webp
function testWebP(callback) {

  var webP = new Image();
  webP.onload = webP.onerror = function () {
  callback(webP.height == 2);
  };
  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
  }
  
  testWebP(function (support) {
  if (support == true) {
  document.querySelector('body').classList.add('webp');
  }
  });
