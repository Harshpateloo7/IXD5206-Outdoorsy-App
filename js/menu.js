let check = document.querySelector(".hamburger");
let nav = document.querySelector('.nav-menu');
check.addEventListener('click', event => {
    nav.classList.toggle('open-nav');
});
