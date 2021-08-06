var accordion=document.getElementsByClassName('.main-box')
var i;
for(i=0;i<accordion.length;i++){
    accordion[i].addEventListener('click',function(){
         this.classList.toggle('active')
    })
}