/*getting menu button*/
const menuButton = document.querySelector(".hidden-menu-container");
const closeMenuButton = document.querySelector(".hidden-menu-container2");

/*adding listener to button*/
menuButton.addEventListener("click", activeMenu);
closeMenuButton.addEventListener("click", closeMenu);

function activeMenu(){
	const nav = document.getElementsByTagName("nav")[0].classList;
	const bod = document.getElementsByTagName("body")[0];
	const menuLi = document.querySelector(".hidden-menu-ul").classList;
	const hiddenMenuOpen = document.querySelector(".hidden-menu-container");
	const hiddenMenuClose = document.querySelector(".hidden-menu-container2");
	hiddenMenuOpen.style.display = "none";
	hiddenMenuClose.style.display = "flex";
	nav.add("active-menu");
	menuLi.add("active-menu-li");
	bod.style.overflow = "hidden";
	/*toggle effect*/
const buttonRow1 = document.querySelector(".button-row4").classList;
const buttonRow2 = document.querySelector(".button-row5").classList;
const buttonRow3 = document.querySelector(".button-row6").classList;
buttonRow1.add("button-row1-active");
buttonRow2.add("button-row2-active");
buttonRow3.add("button-row3-active");
}
function closeMenu(){
	const nav = document.getElementsByTagName("nav")[0].classList;
	const bod = document.getElementsByTagName("body")[0];
	const hiddenMenuOpen = document.querySelector(".hidden-menu-container");
	const hiddenMenuClose = document.querySelector(".hidden-menu-container2");
	const menuLi = document.querySelector(".hidden-menu-ul").classList;
	nav.remove("active-menu");
	hiddenMenuOpen.style.display = "flex";
	hiddenMenuClose.style.display = "none";
	menuLi.remove("active-menu-li");
if (bod.style.overflow == "hidden"){
	bod.style.overflow = "visible";
}
}


