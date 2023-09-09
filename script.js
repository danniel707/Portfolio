var about = document.getElementById("main");
 console.log("1", about)
about.addEventListener("scroll", function () {
    // Get the current scroll position
    var aboutPosition = about.scrollTop;
    console.log("2", aboutPosition)
    // Define the position where you want the color change to occur
    var colorChangePosition = 300; // Adjust this value as needed
    
    // Select the text element by its ID
    var textAbout = document.getElementById("menu-about");
    var textExp = document.getElementById("menu-exp");
   
    // Change the text color when the scroll position reaches a certain point
    if (aboutPosition <= 100) {       
        textAbout.style.color = "white"; // Change the color to red (or any color you prefer)
        textAbout.style.fontSize = "17px"
    } else {
        textAbout.style.color = "#D3D3D3"
        textAbout.style.fontSize = "15px"
    }

     if (aboutPosition > 100 && aboutPosition <= 1000) {       
        textExp.style.color = "white"; // Change the color to red (or any color you prefer)
        textExp.style.fontSize = "17px"
    } else {
        textExp.style.color = "#D3D3D3"
        textExp.style.fontSize = "15px"
    }
});

