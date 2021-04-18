// headerSearch
document.querySelector('.fa-search').addEventListener('click', () => {
    document.querySelector('.header__input').classList.toggle('hidden');
});
// burgerMenu
document.querySelector('.fa-bars').addEventListener('click', () => {
    document.querySelector('.burger').classList.toggle('hidden__burger');
    document.body.classList.toggle('hide__scroll');
});
