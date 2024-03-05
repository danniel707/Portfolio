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
var message = document.getElementById("message")
//When scrolling
main.addEventListener("scroll", function () {
    // Get the current scroll position
    var mainPosition = main.scrollTop;   
    //message.innerText = mainPosition.toFixed(1);
    // Select the text element by its ID
    if (mainPosition <= 495) {       
        textAbout.style.color = "white"; 
        textAbout.style.fontSize = "17px"
    } else {
        textAbout.style.color = "#D3D3D3"
        textAbout.style.fontSize = "15px"
    }
     if (mainPosition > 495 && mainPosition <= 2200) {       
        textExp.style.color = "white"; 
        textExp.style.fontSize = "17px"
    } else {
        textExp.style.color = "#D3D3D3"
        textExp.style.fontSize = "15px"
    }
     if (mainPosition > 2200 && mainPosition <= 3850) {       
        textEducationCourses.style.color = "white"; 
        textEducationCourses.style.fontSize = "17px"
    } else {
        textEducationCourses.style.color = "#D3D3D3"
        textEducationCourses.style.fontSize = "15px"
    }
     if (mainPosition > 3850) {       
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
        main.scrollTop = 500  
        applyStylesToElement(textExp, "white", "17px");        
    } else {
        applyStylesToElement(textExp, "#D3D3D3", "15px");    
    }
    if (hash === "#education-courses") {    
        main.scrollTop = 2348
        applyStylesToElement(textEducationCourses, "white", "17px");
    } else {
        applyStylesToElement(textEducationCourses, "#D3D3D3", "15px");      
    }
    if (hash === "#languages") {    
        main.scrollTop = 3950
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
    //Container shadow
    if (window.innerWidth > 768) {
        element.style.boxShadow = '0 -50px 50px -50px rgba(56, 64, 66, 0.7), 0 50px 50px -50px rgba(56, 64, 66, 0.7)';
    }
    var titles = element.querySelectorAll('.p-title-size');
  
    titles.forEach(function (title) {
        title.style.color = '#5FAFD0';
        title.style.fontWeight = "600"; 
    });
     
    
    var applyStyles = function (elements, boxShadowColor) {
        elements.forEach(function (element) {
            element.style.boxShadow = '0 0 5px ' + boxShadowColor;
        });
    };

    var skills = element.querySelectorAll('.skills li');
    applyStyles(skills, 'rgba(135, 206, 235, 1)');    

    var skillsLang = element.querySelectorAll('.skills-lang');
    applyStyles(skillsLang, 'rgba(112, 148, 221, 1)');

    var img = element.querySelectorAll('img');
    applyStyles(img, 'rgba(56, 64, 66, 0.8)');

    var arrows = element.querySelectorAll('.fa-square-up-right');
   
    arrows.forEach(function (arrow) {
        arrow.style.color = '#5FAFD0';        
    });

    var certificates = element.querySelectorAll('.certificate');

    certificates.forEach(function (certificate) {
        certificate.style.opacity = '1';
    })

    var logos = element.querySelectorAll('.logo img');

    logos.forEach(function (logo) {
        logo.style.opacity = '1'
    })

    var flags = element.querySelectorAll('.language img');

    flags.forEach(function (flag) {
        flag.style.opacity = '1'
    })

}

// Function to remove styles when not hovering
function removeStylesOnHover(element) {
    element.style.boxShadow = 'none';

    var titles = element.querySelectorAll('.p-title-size');
  
    titles.forEach(function (title) {
        title.style.color = '#384042';
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

    var arrows = element.querySelectorAll('.fa-square-up-right')

    arrows.forEach(function (arrow) {
        arrow.style.color = '#384042'
    });

    var certificates = element.querySelectorAll('.certificate');

    certificates.forEach(function (certificate) {
        certificate.style.opacity = '0.7';
    })

    var logos = element.querySelectorAll('.logo img');

    logos.forEach(function (logo) {
        logo.style.opacity = '0.7'
    })

    var flags = element.querySelectorAll('.language img');

    flags.forEach(function (flag) {
        flag.style.opacity = '0.5'
    })
}

// Get all elements with the class .containers
var  containersElements = document.querySelectorAll('.containers');
    
// Add event listeners for mouseover and mouseout events to each element
if (window.innerWidth > 768) {
    containersElements.forEach(function (element) {

        element.addEventListener('mouseover', function (event) {
            applyStylesOnHover(event.currentTarget);
        });

        element.addEventListener('mouseout', function (event) {
            removeStylesOnHover(event.currentTarget);
        });
    });
}


//------------------------------------Modal------------------------------


// Attach a click event listener to the "Open Modal" button

const openModal = document.querySelector(".modal-btn-icon");
const closeModalButton = document.getElementById("closeModal");
const modal = document.getElementById("daneModal");

openModal.addEventListener("click", () => {
    modal.classList.add("show");
});

closeModalButton.addEventListener("click", () => {
    modal.classList.remove("show");
});

// Products Slider
var container = document.querySelector('.slider'),
    btnLeft = document.getElementById("btn-left"),
    btnRight = document.getElementById('btn-right')

    btnRight.addEventListener("click", function(){      
        container.scrollLeft += container.offsetWidth
    })

    btnLeft.addEventListener("click", function(){       
        container.scrollLeft -= container.offsetWidth
    })

var slides = document.querySelectorAll('.slide');
var dotsContainer = document.querySelector('.dots');

// Create dots
slides.forEach((slide, index) => {
  var dot = document.createElement('div');
  dot.classList.add('dot');
  dot.addEventListener('click', () => changeSlide(index));
  dotsContainer.appendChild(dot);
});

var currentSlide = 0;
changeSlide(currentSlide);

function changeSlide(slideIndex) {
  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? 'block' : 'none';
    dotsContainer.children[index].classList.toggle('active', index === slideIndex);
  });
  currentSlide = slideIndex;
}

//Connects the left and right arrows  to the dots
var btnLeft = document.getElementById('btn-left');
var btnRight = document.getElementById('btn-right');

btnLeft.addEventListener('click', function() {
  currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
  changeSlide(currentSlide);
});

btnRight.addEventListener('click', function() {
  currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
  changeSlide(currentSlide);
});
    
//------------------------------------For Mobile--------------------------------------------


var aboutSection = document.getElementById("about");
var experienceSection = document.getElementById("experience");
var educationCoursesSection = document.getElementById("education-courses");
var languageSection = document.getElementById("languages");

var aboutSpan = document.getElementById("about-span");
var experienceSpan = document.getElementById("experience-span");
var educationCoursesSpan = document.getElementById("education-courses-span");
var languageSpan = document.getElementById("language-span");


// Function to show/hide spans based on section visibility
function toggleSpansVisibility() {
    var rectAbout = aboutSection.getBoundingClientRect();
    var rectExperience = experienceSection.getBoundingClientRect();
    var rectEdCourses = educationCoursesSection.getBoundingClientRect();
    var rectLanguages = languageSection.getBoundingClientRect();
    //console.log(rectLanguages.bottom)
    //rectLanguages for all the spans
  if (rectLanguages.bottom >= 5584) {   
    aboutSpan.style.display = "inline-block"; // Show spans as inline-block
  } else {
    aboutSpan.style.display = "none"; // Hide spans
  }
  if (5584 > rectLanguages.bottom && rectLanguages.bottom >= 3670) {   
    experienceSpan.style.display = "inline-block"; // Show spans as inline-block
  } else {
    experienceSpan.style.display = "none"; // Hide spans
  }
  if (3670 > rectLanguages.bottom && rectLanguages.bottom >= 947) {   
    educationCoursesSpan.style.display = "inline-block"; // Show spans as inline-block
  } else {
    educationCoursesSpan.style.display = "none"; // Hide spans
  }
  if (947 > rectLanguages.bottom ) {   
    languageSpan.style.display = "inline-block"; // Show spans as inline-block
  } else {
    languageSpan.style.display = "none"; // Hide spans
  }
}

var main = document.querySelector("main")

function checkScreenWidth() {
  if (window.innerWidth <= 768) {   
    // Attach the event listener to the window object
    main.addEventListener("scroll", function () {
        toggleSpansVisibility();
    })
    toggleSpansVisibility();    

    var containersElements = document.querySelectorAll('.containers');

        // Apply styles to each div
        containersElements.forEach(function (element) {    
            applyStylesOnHover(element);
        });    
    }

}

// Attach the event listener to the window's resize event
window.addEventListener("resize", checkScreenWidth);

// Initial check when the page loads
checkScreenWidth();