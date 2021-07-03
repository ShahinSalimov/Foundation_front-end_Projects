var p01=document.querySelector('.panel01');
var p02=document.querySelector('.panel02');
var p03=document.querySelector('.panel03');


var acar=true;

function func01(){
    if(acar==true){
        p01.style.display='none'
        acar=false;
    }else{
        p01.style.display='block'
        acar=true;
    }
}
function func02(){
    if(acar==true){
        p02.style.display='none'
        acar=false;
    }else{
        p02.style.display='block'
        acar=true;
    }
}
function func03(){
    if(acar==true){
        p03.style.display='none'
        acar=false;
    }else{
        p03.style.display='block'
        acar=true;
    }
}
