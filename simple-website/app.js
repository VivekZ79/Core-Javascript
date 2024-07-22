//NOTE: "JavaScript makes assumptions about the type of data you enter [...] JavaScript tries to be friendly, make your code work, and provide you with a solution, even if the result should be an error"
'use strict'    //"[R]educes silent errors, improves performance, provides more warnings, and fewer unsafe features"
const switcher = document.querySelector('.btn');    //BUTTON REFERENCE

switcher.addEventListener('click', function() {
    //TOGGLE METHOD USED TO SWITCH THE ELEMENT TO THE DARK-THEME CLASS
    document.body.classList.toggle('dark-theme')
    //THIS CHANGES THE CURRENT THEME TO "LIGHT-THEME DARK-THEME" ON START ...

    var className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "Dark";
    }
    else {//... AND GOES HERE
        this.textContent = "Light";
    }

    //"You can define a text string with single or double quotes around the text"
    console.log('current class name: '+className);
});
const toggle = document.getElementById('toggle');
const navMenu = document.getElementById('navbarMenus');

toggle.addEventListener('click', () => {
 toggle.classList.toggle('active');
 navMenu.classList.toggle('active');
});
window.addEventListener('click', (event) => {
 let navBodyFinder =
    event.target.id !== 'toggle' &&
    event.target.id !== 'navbarMenus' &&
    event.target.id !== 'navBody' &&
    event.target.className !== 'navList';

 if (navBodyFinder) {
    toggle.classList.remove('active');
    navMenu.classList.remove('active');
 }
});
