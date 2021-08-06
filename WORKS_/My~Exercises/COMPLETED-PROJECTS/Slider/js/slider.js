let slideimg=document.getElementById('s-img')
let images=new Array(
  "../1.jpg",
  "../2.jpg",
  "../3.jpg",
  "../4.jpg",
  "../5.jpg",
  "../6.jpg"
);
let len=images.length;
let i=0;
function slider(){
  if(i>len-1){
    i=0;
  }
  slideimg.src=images[i];
  i++;
  setTimeout('slider()',3000)
}