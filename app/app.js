const burger = document.getElementById('burger');
const menu = document.getElementById('menu')

burger.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
})