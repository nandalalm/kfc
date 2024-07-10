const menutoggle =document.querySelector('.toggle');
const navigation =document.querySelector('.navigation');
menutoggle.onclick = function(){
  menutoggle.classList.toggle('active')
  navigation.classList.toggle('active')
}

const slides = document.querySelectorAll('.slides');
const prev = document.querySelector('.prev');
const next = document.querySelector('.prev');

i = 0;

function ActiveSlide(n){
  for(slide of slides)
  slide.classList.remove('active');
  slides[n].classList.add('active');
}

prev.addEventListener('click',function(){
  if(i == slides.length - 1){
    i=0;
    ActiveSlide(i);
  }
  else{
    i++;
    ActiveSlide(i);
  }
})

let menu_sec = document.getElementById("menu_sec");
let left_arrow = document.getElementById("left_arrow");
let right_arrow = document.getElementById("right_arrow");

right_arrow.addEventListener('click',()=>{
  menu_sec.scrollLeft += 128;
});

left_arrow.addEventListener('click',()=>{
  menu_sec.scrollLeft -= 128;
});