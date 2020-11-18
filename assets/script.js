
const navbar = document.querySelector('#nav-bar ul');
const menuToggle = document.querySelector('#nav-bar #menu-toggler');

menuToggle.addEventListener('click',() => {
  navbar.classList.toggle("slide");
});
