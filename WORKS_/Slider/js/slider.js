var slideimg=document.getElementById('s-img')
var images=new Array(
  "../1.jpg",
  "../2.jpg",
  "../3.jpg",
  "../4.jpg",
  "../5.jpg",
  "../6.jpg"
);
var len=images.length;
var i=0;
function slider(){
  if(i>len-1){
    i=0;
  }
  slideimg.src=images[i];
  i++;
  setTimeout('slider()',2000)
}