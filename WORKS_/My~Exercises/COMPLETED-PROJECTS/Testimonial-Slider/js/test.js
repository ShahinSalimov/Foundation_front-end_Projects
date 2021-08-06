let testimonials=document.getElementById('Testimonials');
let control1=document.getElementById('control1');
let control2=document.getElementById('control2');
let control3=document.getElementById('control3');
let control4=document.getElementById('control4');
let control5=document.getElementById('control5');
let control6=document.getElementById('control6');


control1.onclick=function(){
    testimonials.style.transform="translateX(0px)";
    control1.classList.add("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
    control4.classList.remove("active");
    control5.classList.remove("active");
    control6.classList.remove("active")
}
control2.onclick=function(){
    testimonials.style.transform="translateX(-940px)";
    control1.classList.remove("active");
    control2.classList.add("active");
    control3.classList.remove("active");
    control4.classList.remove("active");
    control5.classList.remove("active");
    control6.classList.remove("active")
}
control3.onclick=function(){
    testimonials.style.transform="translateX(-1880px)";
    control1.classList.remove("active");
    control2.classList.remove("active");
    control3.classList.add("active");
    control4.classList.remove("active");
    control5.classList.remove("active");
    control6.classList.remove("active")
}
control4.onclick=function(){
    testimonials.style.transform="translateX(-2820px)";
    control1.classList.remove("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
    control4.classList.add("active");
    control5.classList.remove("active");
    control6.classList.remove("active")
}
control5.onclick=function(){
    testimonials.style.transform="translateX(-3760px)";
    control1.classList.remove("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
    control4.classList.remove("active");
    control5.classList.add("active");
    control6.classList.remove("active")
}
control6.onclick=function(){
    testimonials.style.transform="translateX(-4700px)";
    control1.classList.remove("active");
    control2.classList.remove("active");
    control3.classList.remove("active");
    control4.classList.remove("active");
    control5.classList.remove("active");
    control6.classList.add("active")
}
