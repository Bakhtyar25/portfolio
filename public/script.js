// selecting darkmode icon-button
const btn = document.querySelector('.darkmode');

// select dark-backgraunds
const darkBgs = document.querySelectorAll('.bg-dark');

// select light-texts
const lightTexts = document.querySelectorAll('.text-light');

// select dark-texts
const darkTexts = document.querySelectorAll('.text-dark');

// select light-backgrounds
const lightBgs = document.querySelectorAll('.bg-light');

// select dark and light mode icon for changing it
const icon = document.querySelector('.darkmode #darkicon');


/* this function will change the mode if num was odd it will change it to light 
 if it was even it will change it to dark */
let a = 0
function darkMode() {
  ++a;
  if (a % 2 != 0) {

    for (let i = 0; i < lightTexts.length; i++) {
      lightTexts[i].style.setProperty('color', '#212529', 'important');
      lightTexts[i].style.transition = 'all 0.3s linear';

    }
    for (let i = 0; i < darkTexts.length; i++) {
      darkTexts[i].style.setProperty('color', '#f8f9fa', 'important');
      darkTexts[i].style.transition = 'all 0.3s linear';
    }

    for (let i = 0; i < darkBgs.length; i++) {
      darkBgs[i].style.setProperty('background-color', '#f8f9fa', 'important');
      darkBgs[i].style.transition = 'background-color 0.3s linear';
    }

    for (let i = 0; i < lightBgs.length; i++) {
      lightBgs[i].style.setProperty('background-color', '#212529', 'important');
      lightBgs[i].style.transition = 'background-color 0.3s linear';
    }

    icon.setAttribute('src', 'images/dark.png');

  } else if (a % 2 == 0) {

    for (let i = 0; i < lightTexts.length; i++) {
      lightTexts[i].style.setProperty('color', '#f8f9fa', 'important');
      lightTexts[i].style.transition = 'all 0.3s linear';
    }

    for (let i = 0; i < darkTexts.length; i++) {
      darkTexts[i].style.setProperty('color', '#212529', 'important');
      darkTexts[i].style.transition = 'all 0.3s linear';
    }

    for (let i = 0; i < darkBgs.length; i++) {
      darkBgs[i].style.setProperty('background-color', '#212529', 'important');
      darkBgs[i].style.transition = 'background-color 0.3s linear';
    }

    for (let i = 0; i < lightBgs.length; i++) {
      lightBgs[i].style.setProperty('background-color', '#f8f9fa', 'important');
      lightBgs[i].style.transition = 'background-color 0.3s linear';
    }

    icon.setAttribute('src', 'images/light.png');
  }
}
btn.addEventListener('click', darkMode);




// this code will give a first photo of mine a hover 
// with a link init that will guide to about me section

const image = document.querySelector('.im');
const paragraph = document.querySelector('.para')
const paragraph1 = document.querySelector('.link')

image.addEventListener('mouseover', function () {
  paragraph1.textContent = "More About Me";
  paragraph.style.setProperty('background-color', 'rgba(12, 12, 12, 0.244)', 'important');
})

image.addEventListener('mouseout', function () {
  paragraph1.textContent = "";
  paragraph.style.setProperty('background-color', 'rgba(240, 248, 255, 0)', 'important');

})




// this pice of code is when you click a button 
// in the bottom-right page will go to the top of the main page 

let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}






// this code will make the experience of the language appear and disappear

// const lang = document.querySelectorAll('.lang');


// lang.forEach(function (exp) {
//   const progres = exp.querySelector('.exp');
//   const tools = exp.querySelector('.tools');

//   tools.addEventListener('mouseover', () => {
//     progres.style.setProperty('display', 'block', 'important');
//   })

//   tools.addEventListener('mouseout', () => {
//     progres.style.setProperty('display', 'none', 'important');
//   })

// })






