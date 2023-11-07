const openMenu = document.querySelector('#openMenu');
openMenu.textContent = '=';
let openModalMenu = document.querySelector('#nav2');

let countClick = 0;

openMenu.addEventListener('click', () => {

    openModalMenu.classList.toggle('active');
    countClick++;

    if(countClick <= 1){
        //openModalMenu.style.display = 'flex';
        openMenu.textContent = 'x';
        
    }else{

        countClick = 0;
        //openModalMenu.style.display = 'none';
        openMenu.textContent = '=';
    }
    console.log(countClick);
})