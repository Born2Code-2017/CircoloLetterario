var menuButton = document.querySelector('#menuButton');
menuButton.addEventListener('click', function(e) {
    var menuNav = document.querySelector('#menuNav');
    menuNav.classList.toggle('change1');
    menuButton.classList.toggle('change');
    e.stopPropagation();
});