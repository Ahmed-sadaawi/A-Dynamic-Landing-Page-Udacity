/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/



/**
 * Define Global Variables
 * 
*/
// get the navbarList from the document;
let navbarList = document.getElementById('navbar__list'); //Global variable
// get the sections from the document;
let Sections = document.querySelectorAll('section'); ///Global variable
/**
 * 
 * 
 * End Global Variables
*/
// build the navigation. 
function createMenuLink(){
  Sections.forEach((section)=>{ // loop on all sections
    // create 'li' with the child 'a' anchor
    let li = `<li><a data-nav="${section.dataset.nav}" class="menu__link">${section.dataset.nav}</a></li>`;
    // append "li"s to "ul" using the insertAdjacentHTML() method
    navbarList.insertAdjacentHTML("beforeend", li);
  });
};// End nav; 
/*
 *
 *
 * 
*///  loop to run the function one time
for( i = 0; i < 1; i++){
  createMenuLink();
};
/*
 *
 *
 * 
*/
// Add class 'active' to section when near top of viewport
window.onscroll = function(){theActiveClass()};// run the function when window on scroll;

function theActiveClass(){ // function name
  Sections.forEach(section => { // loop on all the sections
    let activeList = navbarList.querySelector(`[data-nav=${section.dataset.nav}]`); // get the data-nav attribute and assign it to an 'activeLsit' variable.
    if(document.body.scrollTop >= section.offsetTop - 200 && document.body.scrollTop < section.offsetTop + section.clientHeight / 2){ // if scrolled from the top page Greater than or equal to offest top of the sections and  
      section.classList.add('your-active-class');// if the condition is true, add 'your-active-class' to the section ;                // if scrolled from the top page less than offset top of the sections plus section height; 
      activeList.classList.add('active-list');   // and then add a class 'active-list' to an activeList variable which i assigned to him the data-nav attribute;
      
    }
    else {                                          // if the condition is false
      section.classList.remove('your-active-class');// 1=> remove 'your-active-class' form section
      activeList.classList.remove('active-list');   // 2=> remove 'active-list' from the navbar items
    }// End the condition
  });// End forEach
}// End theActiveClass() function;

let toTop = document.getElementById('to__top').onclick = function(){ // when clicking on the "Top" btn at the bottom of the page, the window will scroll to the top 0 of the window;
  window.scrollTo({top: 0, behavior: "smooth"}); //scroll to top smoothly.
}
// End the btn

/**
 *
 *
 * 
 */
//Scroll to section on link click
function scrollToSection(){ // function name
  navbarList.addEventListener('click', function(li){ // Event 'click'
    Sections.forEach(function(section){ // get all the sections and loop on them
        if(li.target.dataset.nav === section.dataset.nav){ // if condition is true
          section.scrollIntoView({behavior: 'smooth'}); // scroll into view smoothly on the section
        }// End if condition
    }); // End forEach
  });// End Event
}; // End function
scrollToSection(); // call function; 


// End
/*
 *
 *
 * 
 * */






