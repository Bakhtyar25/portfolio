const btn = document.querySelector('.darkmode');
const darkakan = document.querySelectorAll('.bg-dark')
const textalightakan = document.querySelectorAll('.text-light')
const textdarkakan = document.querySelectorAll('.text-dark')
const ronakakan = document.querySelectorAll('.bg-light')
const icon = document.querySelector('.darkicon')

let a = 0
function darkMode() {
  ++a;
  if (a % 2 != 0) {


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

    icon.setAttribute('src', '../images/dark.png');

  } else if (a % 2 == 0) {

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

    icon.setAttribute('src', '../images/light.png');
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





// const lang = document.querySelectorAll('.lang')


// for (let i = 0; i < lang.length; i++) {
//   lang[i].addEventListener('mouseover', langhover);
// }
// for (let i = 0; i < lang.length; i++) {
//   lang[i].addEventListener('mouseout', langout);

// }




// const exp = document.querySelectorAll(` .exp`)

// function langhover() {

//   for (var i = 0; i < exp.length; i++) {
//     var f = 40
//     if (i == 0) {
//       f = 85
//     }
//     else if (i == 1) {
//       f=70
//     }
//     else if (i == 2) {
//       f=0
//     }
//     else if (i == 3) {
//       f=90
//     }
//     else if (i == 4) {
//       f=85
//     }
//     else if (i == 5) {
//       f=40
//     }
//     else if (i == 6) {
//       f=50
//     }
//     else if (i == 7) {
//       f=50
//     }
//     else if (i == 8) {
//       f=60
//     }
//     else if (i == 9) {
//       f=75
//     }
//     else if (i == 10) {
//       f=80
//     }
//     else if (i == 11) {
//       f=70
//     }
//     exp[i].innerHTML = `<div class="rounded-full text-black w-100 d-block">
//     <div class="progress w-100 mx-auto mt-2">
//     <div class="progress-bar-striped bg-warning progress-bar-animated text-center " role="progressbar"
//     aria-valuenow="${f}" aria-valuemin="0" aria-valuemax="100" style="width: ${f}%">${f}</div>
//     </div>
//     </div>`
    
//   }

// }

// function langout() {
//   for (let i = 0; i < exp.length; i++) {
//     exp[i].innerHTML = ``
//   }
// }





