"use strict";
var tabHeaders = document.getElementsByClassName('nav-item');
for (var i = 0; i < tabHeaders.length; i++) {
    tabHeaders[i].addEventListener('click', activateTab);
};

function activateTab(event) {
    console.log('Heard a click');
};
