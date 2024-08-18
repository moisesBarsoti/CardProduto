const buttonGirar = document.querySelector('#girar');
const imgSofa = document.querySelector('#container-img img');

buttonGirar.addEventListener('click', () => {
    imgSofa.classList.add('girar360');
    if(imgSofa.classList.contains = 'girar360') {
        buttonGirar.addEventListener('click', () => {
            imgSofa.classList.remove('girar360'); 
        }); 
    } 
});