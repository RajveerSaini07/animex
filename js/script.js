// Get the button
let playButton = document.getElementById("playButton");

// When the button is clicked
playButton.addEventListener("click", function () {
    
    // Change button text immediately
    playButton.textContent = "Loading...";

    // Disable button so user can't click again
    playButton.disabled = true;

    // Wait 3 seconds
    setTimeout(function () {

        // Change text back
        playButton.textContent = "Play Now";

        // Enable button again
        playButton.disabled = false;

    }, 3000);

});

let heroTitle = document.getElementById("heroTitle");
let heroDescription = document.getElementById("heroDescription");


let guardianCard = document.getElementById("guardianCard");
let dragonCard = document.getElementById("dragonCard");
let shadowCard = document.getElementById("shadowCard");

guardianCard.addEventListener("click", function () {
    alert("Guardian Knight is ready for battle!");
    heroTitle.textContent = "Guardian Knight";

    heroDescription.textContent = 
    "The fearless protector of ANIMEX. He guards the Core Crystal and never gives up against darkness.";
});

dragonCard.addEventListener("click", function () {
    alert("Dragon Hunter is ready for battle!");
    heroTitle.textContent = "Dragon Hunter";

    heroDescription.textContent =
    "A legendary warrior who hunts dragons across volcanic kingdoms using powerful weapons.";
});

shadowCard.addEventListener("click", function () {
    alert("Shadow Ninja is ready for battle!");
    heroTitle.textContent = "Shadow Ninja";

    heroDescription.textContent =
    "A silent assassin who protects ANIMEX from the shadows using speed and stealth.";
});

const heroButtons = document.querySelectorAll(".hero-btn");

heroButtons.forEach(function(button){

    button.addEventListener("mouseenter", function(){

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", function(){

        button.style.transform = "scale(1)";

    });

});