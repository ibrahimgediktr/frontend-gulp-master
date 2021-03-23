const textHover = document.querySelector('.productive-text-link');
const burgerMenu = document.querySelector('.burger-menu');
const navList = document.querySelector('.nav-list');
const form = document.getElementById('get-started-form');
const email = document.querySelector('.email');
const errorSmall = document.querySelector('small');
const formBtn = document.querySelector('.started-btn');
const mediaQuery = window.matchMedia('(max-width: 992px)')

console.log(formBtn);
console.log(errorSmall);
console.log(form);

// Burger menu active and animation
burgerMenu.addEventListener('click', function () {
    burgerMenu.classList.toggle('burger-animation')
    navList.classList.toggle('nav-active')
})

// Productive link text hover
textHover.addEventListener('mouseover', function () {
    textHover.classList.add('hover');
})
textHover.addEventListener('mouseleave', function () {
    textHover.classList.remove('hover');
});

// Form validation
form.addEventListener('submit', function (e) {
    e.preventDefault();
    checkInputs();
})

function checkInputs() {
    const emailValue = email.value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


    if (emailValue.match(pattern)) {
        errorSmall.innerText = "Email is valid"
        errorSmall.style.color = "green"
    }
    else {
        errorSmall.innerText = "Please enter a valid email adreess"
        errorSmall.style.color = "$error"
    }
}



// function setError(input, message){
//     const formControl
// }



// var burgerMenu = document.querySelector('.burger-menu');
// var navList = document.querySelector('.nav-list');
// var navLinks = document.querySelectorAll('.nav-link');
// const section = document.querySelector('.our-creations-container');


// // Burger menu toggle and toggle animation
// burgerMenu.addEventListener('click', function () {
//     navList.classList.toggle('nav-active');
//     burgerMenu.classList.toggle('burger-menu-ani');

//     navLinks.forEach((link, index) => {
//         if (link.style.animation) {
//             link.style.animation = ""
//         } else {
//             link.style.animation = `navLinksFade 0.3s forwards ${index / 5}s `
//         }
//     });
// });