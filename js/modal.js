/*close modal*/
const modalButton = document.querySelector(".close-modal");

modalButton.addEventListener("click", close);

function close(){
	const modal = document.querySelector(".modal-section");
        const body = document.getElementsByTagName("body")[0];
	modal.style.display = "none";
        body.style.overflow = "visible";
}

/*open modal*/
const project1 = document.querySelector(".project1");
const knowMore1 = document.querySelector(".know-more1");

project1.addEventListener("click", openProject1);
knowMore1.addEventListener("click", openProject1);

function openProject1(){
	const modal = document.querySelector(".modal-section");
        const h2Changeable = document.querySelector(".project-explanation-h2");
        const pChangeable = document.querySelector(".project-explanation-paragraph");
        const obsChangeable = document.querySelector(".obs");
        const aChangeable = document.querySelector(".changeable-website-link");
        const projectDate = document.querySelector(".view-paragraph");
        var vid = document.getElementById("change-source");
	modal.style.display = "flex";

        h2Changeable.innerHTML = "Dead By Daylight";
        vid.src = "../Downloads/sources/projeto1-video.webm";
        aChangeable.href = "../Meus arquivos/../projeto1/index.html";
        pChangeable.innerHTML = "Projeto fictício do jogo ''Dead By Daylight''. Totalmente responsivo feito com: HTML5, CSS3, JavaScript e Sass. Bibliotecas usadas: ScrollReveal.";
        obsChangeable.innerHTML = "Obs: projeto feito apenas para aprendizagem."
        projectDate.innerHTML = "28/11/2022";

        const body = document.getElementsByTagName("body")[0];
        body.style.overflow = "hidden";
        
}
const project2 = document.querySelector(".project2");
const knowMore2 = document.querySelector(".know-more2");

project2.addEventListener("click", openProject2);
knowMore2.addEventListener("click", openProject2);

function openProject2(){

        const modal = document.querySelector(".modal-section");
        const h2Changeable = document.querySelector(".project-explanation-h2");
        const pChangeable = document.querySelector(".project-explanation-paragraph");
        const obsChangeable = document.querySelector(".obs");
        const aChangeable = document.querySelector(".changeable-website-link");
        const projectDate = document.querySelector(".view-paragraph");
        var vid = document.getElementById("change-source");
	modal.style.display = "flex";

        h2Changeable.innerHTML = "Agência de Marketing";
        vid.src = "../Downloads/sources/projeto2-video.webm";
        aChangeable.href = "../Meus arquivos/../projeto2-atual/index.html";
        pChangeable.innerHTML = "Projeto fictício de uma agência de marketing. Totalmente responsivo feito com: HTML5, CSS3, JavaScript e Sass.";
        obsChangeable.innerHTML = "Obs: projeto feito apenas para aprendizagem.";
        projectDate.innerHTML = "03/12/2022";

        const body = document.getElementsByTagName("body")[0];
        body.style.overflow = "hidden";
}
const project3 = document.querySelector(".project3");
const knowMore3 = document.querySelector(".know-more3");

project3.addEventListener("click", openProject3);
knowMore3.addEventListener("click", openProject3);

function openProject3(){
	const modal = document.querySelector(".modal-section");
        const h2Changeable = document.querySelector(".project-explanation-h2");
        const pChangeable = document.querySelector(".project-explanation-paragraph");
        const obsChangeable = document.querySelector(".obs");
        const aChangeable = document.querySelector(".changeable-website-link");
        const projectDate = document.querySelector(".view-paragraph");
        var vid = document.getElementById("change-source");
	modal.style.display = "flex";

        h2Changeable.innerHTML = "Agency";
        vid.src = "../Downloads/sources/projeto3-video.webm";
        aChangeable.href = "../Meus arquivos/../projeto3/index.html";
        pChangeable.innerHTML = "Projeto fictício de uma agência de marketing digital. Totalmente responsivo feito com: HTML5, CSS3, JavaScript e Sass.";
        obsChangeable.innerHTML = "Obs: projeto feito apenas para aprendizagem.";
        projectDate.innerHTML = "08/12/2022";

        const body = document.getElementsByTagName("body")[0];
        body.style.overflow = "hidden";
}
const project4 = document.querySelector(".project4");
const knowMore4 = document.querySelector(".know-more4");

project4.addEventListener("click", openProject4);
knowMore4.addEventListener("click", openProject4);

function openProject4(){
	const modal = document.querySelector(".modal-section");
	modal.style.display = "flex";
      
        const body = document.getElementsByTagName("body")[0];
        body.style.overflow = "hidden";
}

/*setting mobile modal*/

/*open modal*/
const mobileProject1 = document.querySelector(".mobile-project1");
const mobileKnowMore = document.querySelector(".mobile-know-more1");

mobileProject1.addEventListener("click", openMobileProject1);
mobileKnowMore.addEventListener("click", openMobileProject1);

function openMobileProject1(){
	const modal = document.querySelector(".modal-section");
        const h2Changeable = document.querySelector(".project-explanation-h2");
        const pChangeable = document.querySelector(".project-explanation-paragraph");
        const obsChangeable = document.querySelector(".obs");
        const aChangeable = document.querySelector(".changeable-website-link");
        const projectDate = document.querySelector(".view-paragraph");
        var vid = document.getElementById("change-source");

	modal.style.display = "flex";
       
        h2Changeable.innerHTML = "Dead By Daylight";
        vid.src = "../Downloads/sources/projeto1-video.webm";
        aChangeable.href = "../Meus arquivos/../projeto1/index.html";
        pChangeable.innerHTML = "Projeto fictício do jogo ''Dead By Daylight''. Totalmente responsivo feito com: HTML5, CSS3, JavaScript e Sass. Bibliotecas usadas: ScrollReveal.";
        obsChangeable.innerHTML = "Obs: projeto feito apenas para aprendizagem."
        projectDate.innerHTML = "28/11/2022";

        const body = document.getElementsByTagName("body")[0];
        body.style.overflow = "hidden";
}
const mobileProject2 = document.querySelector(".mobile-project2");
const mobileKnowMore2 = document.querySelector(".mobile-know-more2");

mobileProject2.addEventListener("click", openMobileProject2);
mobileKnowMore2.addEventListener("click", openMobileProject2);

function openMobileProject2(){
	const modal = document.querySelector(".modal-section");
        const h2Changeable = document.querySelector(".project-explanation-h2");
        const pChangeable = document.querySelector(".project-explanation-paragraph");
        const obsChangeable = document.querySelector(".obs");
        const aChangeable = document.querySelector(".changeable-website-link");
        const projectDate = document.querySelector(".view-paragraph");
        var vid = document.getElementById("change-source");
	modal.style.display = "flex";

        h2Changeable.innerHTML = "Agência de Marketing";
        vid.src = "../Downloads/sources/projeto2-video.webm";
        aChangeable.href = "../Meus arquivos/../projeto2-atual/index.html";
        pChangeable.innerHTML = "Projeto fictício de uma agência de marketing. Totalmente responsivo feito com: HTML5, CSS3, JavaScript e Sass.";
        obsChangeable.innerHTML = "Obs: projeto feito apenas para aprendizagem.";
        projectDate.innerHTML = "03/12/2022";

        const body = document.getElementsByTagName("body")[0];
        body.style.overflow = "hidden";
}
const mobileProject3 = document.querySelector(".mobile-project3");
const mobileKnowMore3 = document.querySelector(".mobile-know-more3");

mobileProject3.addEventListener("click", openMobileProject3);
mobileKnowMore3.addEventListener("click", openMobileProject3);

function openMobileProject3(){
	const modal = document.querySelector(".modal-section");
        const h2Changeable = document.querySelector(".project-explanation-h2");
        const pChangeable = document.querySelector(".project-explanation-paragraph");
        const obsChangeable = document.querySelector(".obs");
        const aChangeable = document.querySelector(".changeable-website-link");
        const projectDate = document.querySelector(".view-paragraph");
        var vid = document.getElementById("change-source");
	modal.style.display = "flex";

        h2Changeable.innerHTML = "Agency";
        vid.src = "../Downloads/sources/projeto3-video.webm";
        aChangeable.href = "../Meus arquivos/../projeto3/index.html";
        pChangeable.innerHTML = "Projeto fictício de uma agência de marketing digital. Totalmente responsivo feito com: HTML5, CSS3, JavaScript e Sass.";
        obsChangeable.innerHTML = "Obs: projeto feito apenas para aprendizagem.";
        projectDate.innerHTML = "08/12/2022";

        const body = document.getElementsByTagName("body")[0];
        body.style.overflow = "hidden";
}
const mobileProject4 = document.querySelector(".mobile-project4");
const mobileKnowMore4 = document.querySelector(".mobile-know-more4");

mobileProject4.addEventListener("click", openMobileProject4);
mobileKnowMore4.addEventListener("click", openMobileProject4);

function openMobileProject4(){
	const modal = document.querySelector(".modal-section");
	modal.style.display = "flex";

        const body = document.getElementsByTagName("body")[0];
        body.style.overflow = "hidden";
}