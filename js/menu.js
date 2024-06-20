// Menu
document.querySelector('#button-menu').addEventListener('click', (event) => {
    if(document.querySelector('.menu-config').classList.contains('closed')){
        document.querySelector('.menu-config').classList.remove('closed');
    } else {
        document.querySelector('.menu-config').classList.add('closed');
    }
});