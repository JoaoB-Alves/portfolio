/*anchor scrolling by click on li*/

/*getting li from nav*/
const firstNavLi = document.getElementsByTagName("li")[0];
const secondNavLi = document.getElementsByTagName("li")[1];
const thirdNavLi = document.getElementsByTagName("li")[2];
const fourthNavLi = document.getElementsByTagName("li")[3];
const fifthNavLi = document.getElementsByTagName("li")[4];
const sixthNavLi = document.getElementsByTagName("li")[5];
const seventhNavLi = document.getElementsByTagName("li")[6];
const eighthNavLi = document.getElementsByTagName("li")[7];


const foldButton = document.querySelector(".fold-button");

/*setting listener*/
firstNavLi.addEventListener("click", aboutAnchor);
secondNavLi.addEventListener("click", skillsAnchor);
thirdNavLi.addEventListener("click", projectsAnchor);
fourthNavLi.addEventListener("click", contactsAnchor);
foldButton.addEventListener("click", aboutAnchor);
fifthNavLi.addEventListener("click", aboutAnchorM);
sixthNavLi.addEventListener("click", skillsAnchorM);
seventhNavLi.addEventListener("click", projectsAnchorM);
eighthNavLi.addEventListener("click", contactsAnchorM);


/*listener arguments*/
function aboutAnchor(){
const aboutSection = document.querySelector(".about-section").getBoundingClientRect();
window.scrollTo(aboutSection);
}
function skillsAnchor(){
const skillsSection = document.querySelector(".skills-section").getBoundingClientRect();
window.scrollTo(skillsSection);
}

function projectsAnchor(){
const projectsSection = document.querySelector(".projects-section").getBoundingClientRect();
window.scrollTo(projectsSection);
}

function contactsAnchor(){
const contactsSection = document.querySelector(".contacts-section").getBoundingClientRect();
window.scrollTo(contactsSection);
}
/*mobile-scroll*/
function aboutAnchorM(){
const nav = document.getElementsByTagName("nav")[0].classList;
const bod = document.getElementsByTagName("body")[0];
const menuLi = document.querySelector(".hidden-menu-ul").classList;
const hiddenMenuClose = document.querySelector(".hidden-menu-container2");
const hiddenMenuOpen = document.querySelector(".hidden-menu-container");

hiddenMenuClose.style.display = "none";
hiddenMenuOpen.style.display = "flex";

if (bod.style.overflow == "hidden"){
    bod.style.overflow = "visible";
    nav.remove("active-menu");
    menuLi.remove("active-menu-li");
}
const aboutSection = document.querySelector(".about-section").getBoundingClientRect();
window.scrollTo(aboutSection);
}
function skillsAnchorM(){
const nav = document.getElementsByTagName("nav")[0].classList;
const bod = document.getElementsByTagName("body")[0];
const menuLi = document.querySelector(".hidden-menu-ul").classList;
const hiddenMenuClose = document.querySelector(".hidden-menu-container2");
const hiddenMenuOpen = document.querySelector(".hidden-menu-container");

hiddenMenuClose.style.display = "none";
hiddenMenuOpen.style.display = "flex";

if (bod.style.overflow == "hidden"){
    bod.style.overflow = "visible";
    nav.remove("active-menu");
    menuLi.remove("active-menu-li");
}

const skillsSection = document.querySelector(".skills-section").getBoundingClientRect();
window.scrollTo(skillsSection);
}
function projectsAnchorM(){
const nav = document.getElementsByTagName("nav")[0].classList;
const bod = document.getElementsByTagName("body")[0];
const menuLi = document.querySelector(".hidden-menu-ul").classList;
const hiddenMenuClose = document.querySelector(".hidden-menu-container2");
const hiddenMenuOpen = document.querySelector(".hidden-menu-container");

hiddenMenuClose.style.display = "none";
hiddenMenuOpen.style.display = "flex";

if (bod.style.overflow == "hidden"){
    bod.style.overflow = "visible";
    nav.remove("active-menu");
    menuLi.remove("active-menu-li");
}
const projectsSection = document.querySelector(".projects-section").getBoundingClientRect();
window.scrollTo(projectsSection);
}
function contactsAnchorM(){
const nav = document.getElementsByTagName("nav")[0].classList;
const bod = document.getElementsByTagName("body")[0];
const menuLi = document.querySelector(".hidden-menu-ul").classList;
const hiddenMenuClose = document.querySelector(".hidden-menu-container2");
const hiddenMenuOpen = document.querySelector(".hidden-menu-container");

hiddenMenuClose.style.display = "none";
hiddenMenuOpen.style.display = "flex";

if (bod.style.overflow == "hidden"){
    bod.style.overflow = "visible";
    nav.remove("active-menu");
    menuLi.remove("active-menu-li");
}
const contactsSection = document.querySelector(".contacts-section").getBoundingClientRect();
window.scrollTo(contactsSection);
}

/*getting backlinks from backlinks-section*/
const aboutBacklink = document.querySelector(".about-backlink");
const skillsBacklink = document.querySelector(".skills-backlink");
const projectsBacklink = document.querySelector(".projects-backlink");
const contactsBacklink = document.querySelector(".contacts-backlink");

/*setting listener*/
aboutBacklink.addEventListener("click", aboutBack);
skillsBacklink.addEventListener("click", skillsBack);
projectsBacklink.addEventListener("click", projectsBack);
contactsBacklink.addEventListener("click", contactsBack);

/*listener arguments*/
function aboutBack(){
const about = document.querySelector(".about-section").getBoundingClientRect();
window.scrollBy(about);
}

function skillsBack(){
const skillsSection = document.querySelector(".skills-section").getBoundingClientRect();
window.scrollBy(skillsSection);
}

function projectsBack(){
const projectsSection = document.querySelector(".projects-section").getBoundingClientRect();
window.scrollBy(projectsSection);
}

function contactsBack(){
const contactsSection = document.querySelector(".contacts-section").getBoundingClientRect();
window.scrollBy(contactsSection);
}


/*scroll reveal effect*/
ScrollReveal({
    reset: false,
    duration: 2500,
    distance: '60px',
    afterReveal: myCallback,
    delay: 400
});
/*hero-container*/
ScrollReveal().reveal('.introdution-name', { delay: 800, origin: 'bottom'});
ScrollReveal().reveal('.website-h1', { delay: 800, origin: 'left'});
ScrollReveal().reveal('.introdution-paragraph', { delay: 1000, origin:'left'});
ScrollReveal().reveal('.fold-button', { delay: 1000, origin: 'bottom'});
ScrollReveal().reveal('.autor', { delay: 1000, origin: 'bottom'});
ScrollReveal().reveal('.hero-container', { delay: 500, origin: 'left'});
/*about-section*/
ScrollReveal().reveal('.about-section', { delay: 500, origin: 'top'});
ScrollReveal().reveal('.about-h2', { delay: 800, origin: 'bottom'});
ScrollReveal().reveal('.block-calc2', { delay: 1000, origin: 'bottom'});
/*skills-section*/
ScrollReveal().reveal('.skills-section', { delay: 700, origin: 'top'});
ScrollReveal().reveal('.skills-h2', { delay: 800, origin: 'top'});
ScrollReveal().reveal('.skill-container-item1', { delay: 800, origin: 'bottom'});
ScrollReveal().reveal('.skill-container-item2', { delay: 1000, origin: 'bottom'});
ScrollReveal().reveal('.skill-container-item3', { delay: 1200, origin: 'bottom'});
ScrollReveal().reveal('.skill-container-item4', { delay: 1400, origin: 'bottom'});
ScrollReveal().reveal('.skill-container-item5', { delay: 1600, origin: 'bottom'});
/*projects-section*/
ScrollReveal().reveal('.projects-section', { delay: 700, origin: 'top'});
ScrollReveal().reveal('.projects-h2', { delay: 800, origin: 'left'});
ScrollReveal().reveal('.projects-paragraph', { delay: 1000, origin: 'left'});
ScrollReveal().reveal('.header-button,.mobile-header-button', { delay: 1000, origin: 'left'});
ScrollReveal().reveal('.project1,.project2', { delay: 1000, origin: 'top'});
ScrollReveal().reveal('.project3,.project4', { delay: 1000, origin: 'bottom'});
/*contacts-section*/
ScrollReveal().reveal('.contacts-section', { delay: 500, origin: 'top'});
ScrollReveal().reveal('.contacts-h2', { delay: 800, origin: 'top'});
ScrollReveal().reveal('.social-icons', { delay: 800, origin: 'bottom'});
ScrollReveal().reveal('.contacts-header-h3', { delay: 800, origin: 'left'});
ScrollReveal().reveal('.contacts-paragraph', { delay: 800, origin: 'top'});
ScrollReveal().reveal('.whatsapp-container', { delay: 1000, origin: 'bottom'});
/*backlinks-section*/
ScrollReveal().reveal('.backlinks-section', { delay: 500, origin: 'top'});
ScrollReveal().reveal('.about-backlink', { delay: 800, origin: 'bottom'});
ScrollReveal().reveal('.skills-backlink', { delay: 1000, origin: 'bottom'});
ScrollReveal().reveal('.projects-backlink', { delay: 1200, origin: 'bottom'});
ScrollReveal().reveal('.contacts-backlink', { delay: 1400, origin: 'bottom'});

/*setting scroll by clicking on see all button*/
const seeAllButton = document.querySelector(".header-button");
const mobileSeeAllButton = document.querySelector(".mobile-header-button");

seeAllButton.addEventListener("click", revealHiddenProjects);
mobileSeeAllButton.addEventListener("click", revealMobileHiddenProjects);

function revealHiddenProjects(){
    const hiddenProjects = document.querySelector(".hidden-projects-container1").getBoundingClientRect();
    window.scrollBy(hiddenProjects);
    const hiddenProjectsActive = document.querySelector(".hidden-projects-container1");
    const project5 = document.querySelector(".project5");
    const project6 = document.querySelector(".project6");
    project5.style.height = "300px";
    project6.style.height = "300px";
    hiddenProjectsActive.style.opacity = "1";
}
function revealMobileHiddenProjects(){
    const hiddenMobile = document.querySelector(".mobile-project5").getBoundingClientRect();
    window.scrollBy(hiddenMobile);
    const mobileProject5 = document.querySelector(".mobile-project5");
    const mobileProject6 = document.querySelector(".mobile-project6");
    mobileProject5.style.opacity = "1";
    mobileProject6.style.opacity = "1";
    mobileProject5.style.height = "300px";
    mobileProject6.style.height = "300px";
}

function myCallback (el) {
    el.removeAttribute('style');
    const html = document.getElementsByTagName('html')[0].classList;
    html.remove('sr');
}