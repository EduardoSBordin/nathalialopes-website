const openMenu = document.querySelector('#openMenu');
openMenu.innerHTML = '=';
let openModalMenu = document.querySelector('#nav2');

let countClick = 0;

openMenu.addEventListener('click', () => {

    openModalMenu.classList.toggle('active');
    countClick++;

    if(countClick <= 1){
        //openModalMenu.style.display = 'flex';
        openMenu.innerHTML = 'x';
        
    }else{

        countClick = 0;
        //openModalMenu.style.display = 'none';
        openMenu.innerHTML = '=';
    }
    console.log(countClick);
})