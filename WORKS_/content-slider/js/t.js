images=[
    '../content-images/girl.jpg',
    '../content-images/girl.jpg',
    '../content-images/girl.jpg',
    '../content-images/girl.jpg'
]

let slideImg=document.querySelector('.sliderItem img')

a=0;
let interval=setInterval(function(){
   if(a>3){
       a--
   }else{
    slideImg.setAttribute('src',images[a])
    a++
   }
},1000)