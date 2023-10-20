const openMenu = document.querySelector('#openMenu');
let openModalMenu = document.querySelector('#nav2');

let countClick = 0;

openMenu.addEventListener('click', () => {

    openModalMenu.classList.toggle('active');
    countClick++;

    if(countClick <= 1){
        //openModalMenu.style.display = 'flex';
        
    }else{

        countClick = 0;
        //openModalMenu.style.display = 'none';
    }
    console.log(countClick);
})