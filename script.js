
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

let search = document.querySelector('.search-box');

document.querySelector('#search-icon').onclick =() =>{
search.classList.toggle('active');
}
