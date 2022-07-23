let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);

let slidesCount = sliderImages.length;

let currentSlide = 1;

let slideNumberElement = document.querySelector(".slider-numper");

let nextButton = document.querySelector(".next");
let prevButton = document.querySelector(".prev");

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

let paginationul = document.querySelector(".pagination-ul");
let paginationsBullets = Array.from(
  document.querySelectorAll(".pagination-ul li")
);
for (var i = 0; i < paginationsBullets.length; i++) {

  paginationsBullets[i].onclick = function () {

    currentSlide = parseInt(this.getAttribute('data-index'));
    theChecker()
  }

}

// invok thechecker here
theChecker();

function nextSlide() {
    if(nextButton.classList.contains('disabled')){
        return false
    }else{
        currentSlide++
        theChecker();
    }

}
function prevSlide() {
    if(prevButton.classList.contains('disabled')){
        return false
    }else{
        currentSlide--
        theChecker();
    }
}

function theChecker() {
  //add the current index to the slide element
  slideNumberElement.textContent =
    "slide #" + currentSlide + "of" + " " + slidesCount;
  //remove active class from all
  removeAllActive();

  //add the active class to the slideimage
  sliderImages[currentSlide - 1].classList.add("active");

  //add the active class to the paginationul
  paginationul.children[currentSlide - 1].classList.add("active");

  // check if current slide is The First

  if(currentSlide ==1){
    prevButton.classList.add('disabled')
  }else{
    prevButton.classList.remove('disabled')
  }

  // check if current slide is The last

  if(currentSlide == slidesCount){
    nextButton.classList.add('disabled')
  }else{
    nextButton.classList.remove('disabled')
  }


}

function removeAllActive() {
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });

  paginationsBullets.forEach((bullets) => {
    bullets.classList.remove("active");
  });
}
