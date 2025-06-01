const burgerBtn = document.querySelector('.burger-menu');
const navMenu = document.querySelector('nav');
const overlay = document.querySelector('.overlay');
const body = document.body;
console.log(navMenu)

burgerBtn.addEventListener('click', () => {
  navMenu.classList.toggle('js-nav');
  overlay.classList.toggle('js-overlay');
  burgerBtn.classList.toggle('js-burgerBtn');
  if (navMenu.classList.contains('js-nav')) {
    body.style.overflow = 'hidden'
  } else {
    body.style.overflow = 'auto';
  }
});
document.addEventListener('click', (e) => {
  const clickInsideNav = navMenu.contains(e.target);
  const clickOnBurgerBtn = burgerBtn.contains(e.target)
  if (!clickInsideNav && navMenu.classList.contains('js-nav') && !clickOnBurgerBtn) {
    navMenu.classList.remove('js-nav');
    overlay.classList.remove('js-overlay');
    burgerBtn.classList.remove('js-burgerBtn');
    body.style.overflow = 'auto';
  }
})