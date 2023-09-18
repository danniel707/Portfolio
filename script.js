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
var textEducationCourses = document.getElementById("menu-education-courses");
var textLanguages = document.getElementById("menu-languages")
//var message = document.getElementById("message")
//When scrolling
main.addEventListener("scroll", function () {
    // Get the current scroll position
    var mainPosition = main.scrollTop;   
   // message.innerText = mainPosition
    // Select the text element by its ID
    if (mainPosition <= 190) {       
        textAbout.style.color = "white"; 
        textAbout.style.fontSize = "17px"
    } else {
        textAbout.style.color = "#D3D3D3"
        textAbout.style.fontSize = "15px"
    }
     if (mainPosition > 190 && mainPosition <= 1800) {       
        textExp.style.color = "white"; 
        textExp.style.fontSize = "17px"
    } else {
        textExp.style.color = "#D3D3D3"
        textExp.style.fontSize = "15px"
    }
     if (mainPosition > 1800 && mainPosition <= 3231) {       
        textEducationCourses.style.color = "white"; 
        textEducationCourses.style.fontSize = "17px"
    } else {
        textEducationCourses.style.color = "#D3D3D3"
        textEducationCourses.style.fontSize = "15px"
    }
     if (mainPosition > 3231) {       
        textLanguages.style.color = "white"; 
        textLanguages.style.fontSize = "17px"
    } else {
        textLanguages.style.color = "#D3D3D3"
        textLanguages.style.fontSize = "15px"
    }
});

// Function to check if the section is selected, when clicking
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
        main.scrollTop = 307   
        applyStylesToElement(textExp, "white", "17px");        
    } else {
        applyStylesToElement(textExp, "#D3D3D3", "15px");    
    }
    if (hash === "#education-courses") {    
        main.scrollTop = 2040
        applyStylesToElement(textEducationCourses, "white", "17px");
    } else {
        applyStylesToElement(textEducationCourses, "#D3D3D3", "15px");      
    }
    if (hash === "#languages") {    
        main.scrollTop = 3232
        applyStylesToElement(textLanguages, "white", "17px");
    } else {
        applyStylesToElement(textLanguages, "#D3D3D3", "15px");      
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
 
    var titles = element.querySelectorAll('.p-title-size');
  
    titles.forEach(function (title) {
        title.style.color = '#87CEEB';
        title.style.fontWeight = "500"; 
    });
     
    
    var applyStyles = function (elements, boxShadowColor) {
        elements.forEach(function (element) {
            element.style.boxShadow = '0 0 5px ' + boxShadowColor;
        });
    };

    var skills = element.querySelectorAll('.skills li');
    applyStyles(skills, 'rgba(135, 206, 235, 0.5)');
    
    var skillsLang = element.querySelectorAll('.skills-lang');
    applyStyles(skillsLang, 'rgba(112, 148, 221, 0.5)');

    var img = element.querySelectorAll('img');
    applyStyles(img, 'rgba(135, 206, 235, 0.8)');

}

// Function to remove styles when not hovering
function removeStylesOnHover(element) {
    element.style.boxShadow = 'none';

    var titles = element.querySelectorAll('.p-title-size');
  
    titles.forEach(function (title) {
        title.style.color = '#EAEAEA';
        title.style.fontWeight = "normal"; 
    });  

    var removeStyles = function (elements) {
        elements.forEach(function (element) {
            element.style.boxShadow = 'none';
        });
    };

    var skills = element.querySelectorAll('.skills li');
    removeStyles(skills);

    var skillsLang = element.querySelectorAll('.skills-lang');
    removeStyles(skillsLang);

    var img = element.querySelectorAll('img');
    removeStyles(img);
}

// Get all elements with the class .containers
var  containersElements = document.querySelectorAll('.containers');

// Add event listeners for mouseover and mouseout events to each element
 containersElements.forEach(function (element) {
    element.addEventListener('mouseover', function (event) {
        applyStylesOnHover(event.currentTarget);
    });
    element.addEventListener('mouseout', function (event) {
        removeStylesOnHover(event.currentTarget);
    });
});

