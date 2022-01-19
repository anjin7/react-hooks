const CENTER_CLASS ="center";
const firstSlide = document.querySelector(".carousel:first-child");

function carouselSlide(){
  const centerSlide = document.querySelector(`.${CENTER_CLASS}`);
  if(centerSlide){
    centerSlide.classList.remove(CENTER_CLASS);
    const nextSlide = centerSlide.nextElementSibling;
    if(nextSlide){
      nextSlide.classList.add(CENTER_CLASS)
    }else{
      firstSlide.classList.add(CENTER_CLASS)
    }
  }else{
    firstSlide.classList.add(CENTER_CLASS)
  }
}
carouselSlide();
setInterval(carouselSlide, 3000);