const button = document.querySelector('.header__button--js');
console.log(button)




button.addEventListener('click', (e) => {
    const header = document.querySelector('.descriptionheader__js')
    header.innerHTML = 'Albo nie musisz'
    

});



const button2 = document.querySelector('.header__button--js2');
console.log(button2)




button2.addEventListener('click', (e) => {
    const header = document.querySelector('.descriptionheader__js')
    header.innerHTML = 'Formula 1™ - Wszystko co musisz wiedzieć'
});



const greenbutton = document.querySelector('.color__button--greenjs');
greenbutton.addEventListener('click', (e) => {
    const header = document.querySelector('.descriptionheader__js')

    header.classList.toggle('header__title--green')
});




const bluebutton = document.querySelector('.color__button--bluejs');
bluebutton.addEventListener('click', (e) => {
    const header = document.querySelector('.descriptionheader__js')

    header.classList.toggle('header__title--blue')
});




const yellowbutton = document.querySelector('.color__button--yellowjs');
yellowbutton.addEventListener('click', (e) => {
    const header = document.querySelector('.descriptionheader__js')

    header.classList.toggle('header__title--yellow')
});



const blackbutton = document.querySelector('.color__button--blackjs');
blackbutton.addEventListener('click', (e) => {
    const header = document.querySelector('.descriptionheader__js')

    header.classList.toggle('header__title--black')
});


const whitebutton = document.querySelector('.color__button--whitejs');
whitebutton.addEventListener('click', (e) => {
    const header = document.querySelector('.descriptionheader__js')

    header.classList.toggle('header__title--white')
});


const suprisebutton = document.querySelector('.color__button--suprisejs');
suprisebutton.addEventListener('click', (e) => {
    const header = document.querySelector('.descriptionheader__js')

    header.classList.toggle('header__title--suprise')
});





