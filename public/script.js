// selecting darkmode icon-button
const btn = document.querySelector('.darkmode');

// select dark backgraunds
const darkakan = document.querySelectorAll('.bg-dark');

const textalightakan = document.querySelectorAll('.text-light');
const textdarkakan = document.querySelectorAll('.text-dark');
const ronakakan = document.querySelectorAll('.bg-light');
const icon = document.querySelector('.darkmode #darkicon');

let a = 0
function darkMode() {
  ++a;
  if (a % 2 != 0) {

    for (let i = 0; i < textalightakan.length; i++) {
      textalightakan[i].style.setProperty('color', '#212529', 'important');
      textalightakan[i].style.transition = 'all 0.3s linear';

    }
    for (let i = 0; i < textdarkakan.length; i++) {
      textdarkakan[i].style.setProperty('color', '#f8f9fa', 'important');
      textdarkakan[i].style.transition = 'all 0.3s linear';
    }

    for (let i = 0; i < darkakan.length; i++) {
      darkakan[i].style.setProperty('background-color', '#f8f9fa', 'important');
      darkakan[i].style.transition = 'background-color 0.3s linear';
    }

    for (let i = 0; i < ronakakan.length; i++) {
      ronakakan[i].style.setProperty('background-color', '#212529', 'important');
      ronakakan[i].style.transition = 'background-color 0.3s linear';
    }

    icon.setAttribute('src', 'images/dark.png');

  } else if (a % 2 == 0) {

    for (let i = 0; i < textalightakan.length; i++) {
      textalightakan[i].style.setProperty('color', '#f8f9fa', 'important');
      textalightakan[i].style.transition = 'all 0.3s linear';
    }

    for (let i = 0; i < textdarkakan.length; i++) {
      textdarkakan[i].style.setProperty('color', '#212529', 'important');
      textdarkakan[i].style.transition = 'all 0.3s linear';
    }

    for (let i = 0; i < darkakan.length; i++) {
      darkakan[i].style.setProperty('background-color', '#212529', 'important');
      darkakan[i].style.transition = 'background-color 0.3s linear';
    }

    for (let i = 0; i < ronakakan.length; i++) {
      ronakakan[i].style.setProperty('background-color', '#f8f9fa', 'important');
      ronakakan[i].style.transition = 'background-color 0.3s linear';
    }

    icon.setAttribute('src', 'images/light.png');
  }
}
btn.addEventListener('click', darkMode);






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








const lang = document.querySelectorAll('.lang');


lang.forEach(function (exp) {
  const progres = exp.querySelector('.exp');
  const tools = exp.querySelector('.tools');

  tools.addEventListener('mouseover', () => {
    progres.style.setProperty('display', 'block', 'important');
  })

  tools.addEventListener('mouseout', () => {
    progres.style.setProperty('display', 'none', 'important');
  })

})






