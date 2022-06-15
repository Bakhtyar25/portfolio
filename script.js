const btn= document.querySelector('.darkmode');
const darkakan= document.querySelectorAll('.bg-dark')
const textdarkakan= document.querySelectorAll('.text-light')
const icon=document.querySelector('.darkicon')

let a=0
function darkMode(){
    ++a;
    if(a%2!=0){
       
               
        for (let i = 0; i < textdarkakan.length; i++) {
            textdarkakan[i].style.setProperty('color', '#212529', 'important');
          }
        for (let i = 0; i < darkakan.length; i++) {
            darkakan[i].style.setProperty('background-color', '#f8f9fa', 'important');
          }
        icon.setAttribute('src','images/dark.png');

    }else if(a%2==0){
        
        for (let i = 0; i < textdarkakan.length; i++) {
            textdarkakan[i].style.setProperty('color', '#f8f9fa', 'important');
          }
        for (let i = 0; i < darkakan.length; i++) {
            darkakan[i].style.setProperty('background-color', '#212529', 'important');
          }
        icon.setAttribute('src','images/light.png');   
    }
}
btn.addEventListener('click',darkMode);