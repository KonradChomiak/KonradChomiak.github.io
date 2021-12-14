const button = document.querySelector('.header__button--js');
console.log(button)




button.addEventListener('click', (e) => {
   const header = document.querySelector('.header__title--js')
   header.innerHTML = 'ZMIANA'
});


