window.addEventListener("load", checkLanguage);
/*check/change language*/
function checkLanguage(){
    let language = window.navigator.language; 
    if (language == "en-US" || language == "en"){
        /*getting/changing li from nav*/
        const htmlObject = document.getElementsByTagName("html")[0];
        htmlObject.setAttribute("lang", "en");
        const firstNavLi = document.getElementsByTagName("li")[0];
        const secondNavLi = document.getElementsByTagName("li")[1];
        const thirdNavLi = document.getElementsByTagName("li")[2];
        const fourthNavLi = document.getElementsByTagName("li")[3];
        firstNavLi.innerHTML = "About";
        secondNavLi.innerHTML = "Skills";
        thirdNavLi.innerHTML = "Projects";
        fourthNavLi.innerHTML = "Contacts";

        /*getting/changing text from introdution-container*/
        const introdutionName = document.querySelector(".introdution-name");
        const websiteH1 = document.querySelector(".website-h1");
        const introdutionParagraph = document.getElementsByTagName("q")[0];
        const foldButton = document.querySelector(".fold-button");
        introdutionName.innerHTML = "Hello, I'm João Batista";
        websiteH1.innerHTML = "Front End Devoloper";
        introdutionParagraph.innerHTML = "The only place success comes before work is in the dictionary";
        foldButton.innerHTML = "About me"

        /*getting/changing text from about-section*/
        const aboutH2 = document.querySelector(".about-h2");
        const aboutParagraph1 = document.querySelector(".about-paragraph1");
        const aboutParagraph2 = document.querySelector(".about-paragraph2");
        aboutH2.innerHTML = "About me";
        aboutParagraph1.innerHTML = "I'm called João Batista, but you can call me by my nickname ''Codak'' I'm 20 years old, and when I finished high school in 2020 I asked myself what I wanted for my life. In 2021, I took a front-end developer course at Senai where I could learn a lot of things, but I thought It wasn't still enough and, since then I decided to focus on studies and this portfolio is result of a base built in front-end in: HTML5, CSS3, and JavaScript. With this base now I wish to learn new things and improve more and more."
        aboutParagraph2.innerHTML = "I've been studying CEO, UI, and UX because I know this is essential for this job. Now I fell prepared to face a professional experience where I know I'll be able to improve a lot, and if what I've been learned isn't still enough to begin I'm not going to give up till I get an opportunity.";

        /*getting/changing text from skill-section*/
        const skillsH2 = document.querySelector(".skills-h2");
        skillsH2.innerHTML = "Skills";

        /*getting/changing text from projects-section*/
        const projectsH2 = document.querySelector(".projects-h2");
        projectsH2.innerHTML = "Projects";
        const projectsParagraph = document.querySelector(".projects-paragraph");
        projectsParagraph.innerHTML = "A bit of what I've been learning and practicing...";
        const headerButton = document.querySelector(".header-button");
        headerButton.innerHTML = "All";

        /*getting/changing text from contacts-section*/
        const contactsH2 = document.querySelector(".contacts-h2");
        contactsH2.innerHTML = "Contacts";
        const contactsHeaderh3 = document.querySelector(".contacts-header-h3");
        contactsHeaderh3.innerHTML = "Want to give me the opportunity to begin my professional career?";
        const contactsParagraph = document.querySelector(".contacts-paragraph");
        contactsParagraph.innerHTML = "Here are all my contacts";
        const whatsappButton = document.querySelector(".whatsapp-button");
        whatsappButton.innerHTML = "Message me";

        /*getting/changing text from backlinks-section*/

        const aboutBacklink = document.querySelector(".about-backlink");
        aboutBacklink.innerHTML = "About";
        const skillsBacklink = document.querySelector(".skills-backlink");
        skillsBacklink.innerHTML = "Skills";
        const projectsBacklink = document.querySelector(".projects-backlink");
        projectsBacklink.innerHTML = "Projects";
        const contactsBacklink = document.querySelector(".contacts-backlink");
        contactsBacklink.innerHTML = "Contacts";

        /*getting/changing text from hidden projects*/
        const project5 = document.querySelector(".project5");
        project5.innerHTML = "In developing";
        const project6 = document.querySelector(".project6");
        project6.innerHTML = "In developing";
        const mobileProject5 = document.querySelector(".mobile-project5");
        mobileProject5.innerHTML = "In developing";
        const mobileProject6 = document.querySelector(".mobile-project6");
        mobileProject6.innerHTML = "In developing";
        
        const knowMore1 = document.querySelector(".know-more1");
        knowMore1.innerHTML = "know more";
        const knowMore2 = document.querySelector(".know-more2");
        knowMore2.innerHTML = "know more";
        const knowMore3 = document.querySelector(".know-more3");
        knowMore3.innerHTML = "know more";
        const knowMore4 = document.querySelector(".know-more4");
        knowMore4.innerHTML = "know more";

        const mobileKnowMore = document.querySelector(".mobile-know-more1");
        mobileKnowMore.innerHTML = "know more";
        const mobileKnowMore2 = document.querySelector(".mobile-know-more2");
        mobileKnowMore2.innerHTML = "know more";
        const mobileKnowMore3 = document.querySelector(".mobile-know-more3");
        mobileKnowMore3.innerHTML = "know more";
        const mobileKnowMore4 = document.querySelector(".mobile-know-more4");
        mobileKnowMore4.innerHTML = "know more";



    }
}


