document.querySelector('.menu-btn').addEventListener('click', ()=>{
    document.querySelector('.nav-menu').classList.toggle('show');
});

ScrollReveal().reveal('.hoy');
ScrollReveal().reveal('.news-col', {delay: 500});
ScrollReveal().reveal('.banner', {delay: 500});
ScrollReveal().reveal('.banner2', {delay: 500});