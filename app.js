// Select the present body and each ribbon individually
const present = document.querySelector(".present");
const cross = document.querySelector(".cross");
const cross2 = document.querySelector(".cross2");

// On clicking the present
present.addEventListener("click", function() {
    // Darken the body to draw attention to the present
    document.body.classList.add("darken");
    // Hide gradually each layer of the present to unravel
    cross.classList.add("hidden");
    setTimeout(function(){cross2.classList.add("hidden")},1000);
    setTimeout(function(){present.classList.add("reveal");},3000);
    // When revealing the present, play a victory fanfare
    setTimeout(function(){
        present.classList.remove("hidden");
        var audio = new Audio('tadaa.flac');
        audio.play();
        document.body.classList.remove("darken");
    },3000);

});