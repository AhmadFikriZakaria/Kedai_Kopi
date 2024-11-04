// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav')

// Ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};


// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form')
const searchBox = document.querySelector('#search-box')

// Ketika elemen id search-button di klik
document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus(); //  Fokuskan pada input search   
    e.preventDefault(); // Mencegah aksi default


};




// Klik diluar elemen
const hm =  document.querySelector('#hamburger-menu');
const sb =  document.querySelector('#search-button');


document.addEventListener('click', function(e) {
    if (!hm.contains(e.target) &&  !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
    if (!sb.contains(e.target) &&  !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }
    if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
        shoppingCart.classList.remove('active');
      }
});
