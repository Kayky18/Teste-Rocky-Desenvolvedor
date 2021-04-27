window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("rolar-menu", window.scrollY > 0);
});
function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navegacao = document.querySelector('.navegacao');
    menuToggle.classList.toggle('active');
    navegacao.classList.toggle('active');
}