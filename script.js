// Function to apply styles to an element
function applyStylesToElement(element, color, fontSize) {
    element.style.color = color;
    element.style.fontSize = fontSize;
}

var hoverableElements = document.getElementsByClassName("menu");

for (var i = 0; i < hoverableElements.length; i++) {
    hoverableElements[i].addEventListener("mouseenter", function () {
        // Handle hover-in effect (e.g., change properties)
        //this.style.fontSize = "17px"; 
        //this.style.color = "white"            
    });

    hoverableElements[i].addEventListener("mouseleave", function () {
        // Handle hover-out effect (e.g., reset properties)
        //this.style.fontSize = "15px"; 
        //this.style.color = "#D3D3D3"  
    });
}

var main = document.getElementById("main");
var textAbout = document.getElementById("menu-about");
var textExp = document.getElementById("menu-exp");
var textCursesCerts = document.getElementById("menu-curses-certs");

main.addEventListener("scroll", function () {
    // Get the current scroll position
    var mainPosition = main.scrollTop;   
    // Select the text element by its ID
    if (mainPosition <= 100) {       
        textAbout.style.color = "white"; 
        textAbout.style.fontSize = "17px"
    } else {
        textAbout.style.color = "#D3D3D3"
        textAbout.style.fontSize = "15px"
    }
     if (mainPosition > 100 && mainPosition <= 1000) {       
        textExp.style.color = "white"; 
        textExp.style.fontSize = "17px"
    } else {
        textExp.style.color = "#D3D3D3"
        textExp.style.fontSize = "15px"
    }
     if (mainPosition > 1000 ) {       
        textCursesCerts.style.color = "white"; 
        textCursesCerts.style.fontSize = "17px"
    } else {
        textCursesCerts.style.color = "#D3D3D3"
        textCursesCerts.style.fontSize = "15px"
    }
});

// Function to check if the #experience section is selected
function checkSelectedSection() {
    // Get the hash from the URL
    var hash = window.location.hash;

    if (hash === "#about") {
        main.scrollTop = 0
        applyStylesToElement(textAbout, "white", "17px");        
    } else {
        applyStylesToElement(textAbout, "#D3D3D3", "15px");       
    }
    // Check if the hash matches the id of the target section
    if (hash === "#experience") {    
        main.scrollTop = 290   
        applyStylesToElement(textExp, "white", "17px");        
    } else {
        applyStylesToElement(textExp, "#D3D3D3", "15px");    
    }
    if (hash === "#curses-certs") {    
        applyStylesToElement(textCursesCerts, "white", "17px");
    } else {
        applyStylesToElement(textCursesCerts, "#D3D3D3", "15px");      
    }
}

// Attach an event listener to the window for hash changes
window.addEventListener("hashchange", checkSelectedSection);

// Call the function initially to check the section on page load
checkSelectedSection();


//----------------------------------------------------------------------------------

// Function to apply styles on hover
function applyStylesOnHover(element) {
    element.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.7)';
 
    var jobTitle = element.querySelector('.p-job-title-size');
    jobTitle.style.color = '#87CEEB';
    jobTitle.style.fontWeight = "500";
    
    var applySkillsStyles = function (elements, boxShadowColor) {
        elements.forEach(function (element) {
            element.style.boxShadow = '0 0 5px ' + boxShadowColor;
        });
    };

    var skills = element.querySelectorAll('.skills-items');
    applySkillsStyles(skills, 'rgba(135, 206, 235, 0.5)');
    
    var skillsLang = element.querySelectorAll('.skills-items-lang');
    applySkillsStyles(skillsLang, 'rgba(112, 148, 221, 0.5)');
}

// Function to remove styles when not hovering
function removeStylesOnHover(element) {
    element.style.boxShadow = 'none';

    var jobTitle = element.querySelector('.p-job-title-size');
    jobTitle.style.color = '#EAEAEA';
    jobTitle.style.fontWeight = "normal";

    var removeSkillsStyles = function (elements) {
        elements.forEach(function (element) {
            element.style.boxShadow = 'none';
        });
    };

    var skills = element.querySelectorAll('.skills-items');
    removeSkillsStyles(skills);

    var skillsLang = element.querySelectorAll('.skills-items-lang');
    removeSkillsStyles(skillsLang);
}

// Get all elements with the class .divs-exps
var divsExpsElements = document.querySelectorAll('.divs-exps');

// Add event listeners for mouseover and mouseout events to each element
divsExpsElements.forEach(function (element) {
    element.addEventListener('mouseover', function (event) {
        applyStylesOnHover(event.currentTarget);
    });
    element.addEventListener('mouseout', function (event) {
        removeStylesOnHover(event.currentTarget);
    });
});

