var acc=document.getElementsByClassName('.main-btn');

var i;
var acar=true;
for(i=0;i<acc.length;i++){
    acc[i].onclick=function(){
        var panel=this.nextElementSibling;
       if(acar==true){
           panel.style.diplay="none";
           acar=false;
       }else{
        panel.style.diplay="block";
        acar=true;
       }
    }
}