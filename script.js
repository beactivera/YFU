var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function showImages() {
    document.getElementById('images_menu').style.display = "block";
    document.getElementById('menu_categories').style.display = "block";
    water.classList.add("moveWater");
    nature.classList.add("moveNature");
    landscape.classList.add("moveLandscape");
    family.classList.add("moveFamily");
}


function hideImages() {
    document.getElementById('images_menu').style.display = "none";
}



let water = document.querySelector(".water");
let nature = document.querySelector(".nature");
let landscape = document.querySelector(".landscape");
let family = document.querySelector(".family");


$('.logo').click(function(){
    $('html, body').animate({scrollTop:0}, 'slow');
    return false;
});



var vid = document.getElementById("#plane"); 

function playVid() { 
    vid.play(); 
    
} 
