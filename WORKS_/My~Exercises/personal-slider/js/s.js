let slider=document.getElementsByClassName('.image-slider');
let prev=document.getElementById('prev');
let next=document.getElementById('next');
let images=['1',
'2',
'3',
'4',
'5',
'6'];
let i=images.length;
function next(){
if(i>images.length){
    i++;
}else{
    i=1;
}
slider.innerHTMl="<img src="+images[i-1]+".jpg>";
}
function prev(){
    if(i<images.length && i>1){
        i++;
    }else{
        i=images.length;
    }
    slider.innerHTMl="<img src="+images[i-1]+".jpg>";
    }