let  button = document.getElementById('nav-toggle'),
    buttonList = document.getElementById('nav-list');
    
button.addEventListener('click', function () {
    'use strict';
    button.classList.toggle('driven');
    buttonList.classList.toggle('driven');
}, false);
