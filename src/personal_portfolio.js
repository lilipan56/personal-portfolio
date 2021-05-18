window.onload = function () {
    let nameHeader = document.getElementById('name-header');
    let proposNav = document.getElementById('propos-nav');
    let cvNav = document.getElementById('cv-nav');
    let projetNav = document.getElementById('projet-nav');
    let contactNav = document.getElementById('contact-nav');
    let propos = document.getElementById('propos');
    let cv = document.getElementById('cv');
    let projets = document.getElementById('projets');
    let contact = document.getElementById('contact');
    let buttonProjets = document.getElementById('button-projets');
    let buttonCv = document.getElementById('button-cv');

    function animateDisplay(page) {
        propos.style.display = "none";
        cv.style.display = "none";
        projets.style.display = "none";
        contact.style.display = "none";
        
        if(page === propos){
            propos.style.display = "";
        } else if(page === cv) {
            cv.style.display = "";
        } else if(page === projets) {
            projets.style.display = "";
        } else if(page === contact) {
            contact.style.display = "";
        }
    };


    nameHeader.onclick = () => animateDisplay(propos);
    proposNav.onclick = () => animateDisplay(propos);
    cvNav.onclick = () => animateDisplay(cv);
    projetNav.onclick = () => animateDisplay(projets);
    contactNav.onclick = () => animateDisplay(contact);
    buttonProjets.onclick = () => animateDisplay(projets);
    buttonCv.onclick = () => animateDisplay(cv);
    
    // Default display when loading page
    animateDisplay(propos);
}