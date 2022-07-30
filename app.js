var menu = document.querySelector(".menu");
var toggle_menu = document.querySelector(".toggle-menu");
toggle_menu.onclick = function () {
    toggle_menu.classList.toggle('active');
    menu.classList.toggle('responsive');
}

var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function() {
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})
