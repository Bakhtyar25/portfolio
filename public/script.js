const btn= document.querySelector('.darkmode');
const darkakan= document.querySelectorAll('.bg-dark')
const textalightakan= document.querySelectorAll('.text-light')
const textdarkakan= document.querySelectorAll('.text-dark')
const ronakakan= document.querySelectorAll('.bg-light')
const icon=document.querySelector('.darkicon')

let a=0
function darkMode(){
    ++a;
    if(a%2!=0){
       
               
        for (let i = 0; i < textalightakan.length; i++) {
            textalightakan[i].style.setProperty('color', '#212529', 'important');
          }
        for (let i = 0; i < textdarkakan.length; i++) {
            textdarkakan[i].style.setProperty('color', '#f8f9fa', 'important');
          }

        for (let i = 0; i < darkakan.length; i++) {
            darkakan[i].style.setProperty('background-color', '#f8f9fa', 'important');
          }

        for (let i = 0; i < darkakan.length; i++) {
            ronakakan[i].style.setProperty('background-color', '#212529', 'important');
          }

        icon.setAttribute('src','../images/dark.png');

    }else if(a%2==0){
        
        for (let i = 0; i < textalightakan.length; i++) {
            textalightakan[i].style.setProperty('color', '#f8f9fa', 'important');
          }

        for (let i = 0; i < textdarkakan.length; i++) {
            textdarkakan[i].style.setProperty('color', '#212529', 'important');
          }

        for (let i = 0; i < darkakan.length; i++) {
            darkakan[i].style.setProperty('background-color', '#212529', 'important');
          }

        for (let i = 0; i < darkakan.length; i++) {
            ronakakan[i].style.setProperty('background-color', '#f8f9fa', 'important');
          }

        icon.setAttribute('src','../images/light.png');   
    }
}
btn.addEventListener('click',darkMode);






const image=document.querySelector('.im');
const paragraph=document.querySelector('.para')
const paragraph1=document.querySelector('.link')

image.addEventListener('mouseover',function(){
    paragraph1.textContent = "More About Me";
    paragraph.style.setProperty('background-color', 'rgba(12, 12, 12, 0.244)', 'important');
})

image.addEventListener('mouseout',function(){
  paragraph1.textContent = "";
  paragraph.style.setProperty('background-color', 'rgba(240, 248, 255, 0)', 'important');

})





var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if(!items[i].classList.contains("in-view")){
        items[i].classList.add("in-view");
      }
    } else if(items[i].classList.contains("in-view")) {
        items[i].classList.remove("in-view");
    }
  }
}
 
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);

