const openMenu = document.querySelector('#openMenu');
openMenu.textContent = '=';
let openModalMenu = document.querySelector('#nav2');

let btnCourses = document.querySelector('.btnCourses');
let modalCourses = document.querySelector('#modalCourses');

let countClick = 0;
let countClickModalCourses = 0;

openMenu.addEventListener('click', () => {

    openModalMenu.classList.toggle('active');
    countClick++;

    if(countClick == 1){
        //openModalMenu.style.display = 'flex';
        openMenu.textContent = 'x'
        
    }else{

        countClick = 0;
        //openModalMenu.style.display = 'none';
        openMenu.textContent = '=';
    }


    console.log(countClick);
})

btnCourses.addEventListener('click', (e) => {
    e.preventDefault();
    countClickModalCourses++;

    modalCourses.classList.toggle('activeModal');

    // if(countClickModalCourses <= 1){
    //     modalCourses.style.display = "none";
    // }else{

    //     countClickModalCourses = 0;
    //     modalCourses.style.display = 'flex';
    // }

})