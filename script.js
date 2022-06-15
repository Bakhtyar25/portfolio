const btn= document.querySelector('.darkmode');
const darkakan= document.querySelector('.bg-dark')
const textdarkakan= document.querySelectorAll('.text-light')


// btn.style. = "red";


let a=0
function darkMode(){
    ++a;
    if(a%2!=0){
       
        darkakan.style.setProperty('background-color', '#f8f9fa', 'important');       
        // textdarkakan.style.setProperty('color', '#212529', 'important');       
        for (let i = 0; i < textdarkakan.length; i++) {
            textdarkakan[i].style.setProperty('color', '#212529', 'important');
          }
        
    }else if(a%2==0){
        
        darkakan.style.setProperty('background-color', '#212529', 'important');       
        // textdarkakan.style.setProperty('color', '#f8f9fa', 'important'); 
        for (let i = 0; i < textdarkakan.length; i++) {
            textdarkakan[i].style.setProperty('color', '#f8f9fa', 'important');
          }
        
        
    }
}

btn.addEventListener('click',darkMode);