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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const fragment = document.createDocumentFragment();
const sectionList = document.querySelectorAll('section');

let activeSection = document.querySelector('.your-active-class');
let activeNav = document.querySelector('.active-nav');
/*let scrolling = false;
let cursor;*/

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function isInViewport (elem) {
    const bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

// Check which nav link is highlighted, and update if needed

/*setInterval(function () {
    if(scrolling) {
        addClass(cursor);
        scrolling = false;
    }
}, 200);*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavigation(){
    for (section of sectionList){
        const newMenuItem = document.createElement('li');
        newMenuItem.innerHTML = `<a class = "menu__link" data-id="${section.id}">${section.dataset.nav}</a>`;
        newMenuItem.id = `nav-${section.id}`;
        fragment.appendChild(newMenuItem);
    }
    const navBarList = document.getElementById('navbar__list')
    navBarList.appendChild(fragment);
}

// Add class 'active' to section when near top of viewport
function setActiveClass(){
    for (const section of sectionList){
        const nav = document.querySelector(`#nav-${section.id}`)
        if (isInViewport(section) && section != activeSection) {
            section.classList.add("your-active-class");
            nav.classList.add('active-nav')
        }else{
            section.classList.remove("your-active-class");
            nav.classList.remove('active-nav')
/*            setActiveSection(section);*/
/*            setActiveNav(document.querySelector(`#nav-${section.id}`));*/
        }
        
    }
}
// Removes active-section class from previous active section, adds the class to 
// new active section.
/*function setActiveSection(section) {
    activeSection.classList.remove('your-active-class');
    section.classList.add('your-active-class');
    activeSection = section;
}*/

// Removes active-nav class from previous active navigation button, adds the 
// class to new active navigation button.
/*function setActiveNav(nav) {
    activeNav.classList.remove('active-nav');
    nav.classList.add('active-nav')
    activeNav = nav;
}*/



// Scroll to anchor ID using scrollTO event
function scrollToElement(event){
    if(event.target.nodeName === 'A'){
        const sectionId = event.target.getAttribute('data-id');
        const section = document.getElementById(sectionId);
        section.scrollIntoView({behavior: "smooth"});
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/
document.addEventListener('scroll', function(){
    setActiveClass();

});
const navBarList = document.getElementById('navbar__list')
navBarList.addEventListener('click', function(event){
    scrollToElement(event)
})
// Build menu 
buildNavigation()
// Scroll to section on link click

// Set sections as active


