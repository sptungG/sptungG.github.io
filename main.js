/*==================== GRID ====================*/
function resizeGridItem(item){
    grid = document.getElementsByClassName("grid")[0];
    rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
      item.style.gridRowEnd = "span "+rowSpan;
  }
  
  function resizeAllGridItems(){
    allItems = document.getElementsByClassName("item");
    for(x=0;x<allItems.length;x++){
      resizeGridItem(allItems[x]);
    }
  }
  
  function resizeInstance(instance){
      item = instance.elements[0];
    resizeGridItem(item);
  }
  
  window.onload = resizeAllGridItems();
  window.addEventListener("resize", resizeAllGridItems);
  
  allItems = document.getElementsByClassName("item");
  for(x=0;x<allItems.length;x++){
    imagesLoaded( allItems[x], resizeInstance);
  }
/*======================== TOP button ========================*/
//Get the button:
  mybutton = document.getElementById("myBtn");       
// When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};
        
        function scrollFunction() {
          if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
            mybutton.style.display = "block";
          } else {
            mybutton.style.display = "none";
          }
        }
        
// When the user clicks on the button, scroll to the top of the document
        function topFunction() {
          document.body.scrollTop = 0; // For Safari
          document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }
/*==================== LANDING PAGE-BANNER ====================*/
const imgBX = document.querySelector(".imgBx");
const slides = imgBX.getElementsByTagName('img');
var i = 0;

function nextSlide() {
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
}
function prevSlide() {
    slides[i].classList.remove('active');
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add('active');
}

const contentBx = document.querySelector(".contentBx");
const slidesText = contentBx.getElementsByTagName('div');
var j = 0;

function nextSlideText() {
    slidesText[j].classList.remove('active');
    j = (j + 1) % slidesText.length;
    slidesText[j].classList.add('active');
}
function prevSlideText() {
    slidesText[j].classList.remove('active');
    j = (j - 1 +slidesText.length) % slidesText.length;
    slidesText[j].classList.add('active');
}
/*==================== STARTING ANIMATION ====================*/
const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.4 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".imgBx", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".contentBx", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".controls", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".pagination-button", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
  reset: true
});
sr.reveal(`.imgBx, .contentBx,
          .about-data, .about-img,
          .main-content-filter, .item
`, {
  interval: 200
})
/*====================  ====================*/


