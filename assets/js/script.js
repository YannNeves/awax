var slideInicial = 0;

showSlides();

function showSlides() {
  
  var i;
  
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("pointer");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideInicial++;
  
  if (slideInicial > slides.length) {
    slideInicial = 1
  }    
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideInicial-1].style.display = "inline-block";  
  dots[slideInicial-1].className += " active";
  
  setTimeout(showSlides, 8000); 
}

function slideAtual(n) {
  selecionarSlide(slideInicial = n);
}

function selecionarSlide(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("pointer");
  
  if (n > slides.length) {slideInicial = 1}    
  if (n < 1) {slideInicial = slides.length}
  
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideInicial-1].style.display = "inline-block";  
  dots[slideInicial-1].className += " active";
}