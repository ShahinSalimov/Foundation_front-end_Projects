let p01=document.querySelector('.p01');
let p02=document.querySelector('.p02');
let p03=document.querySelector('.p03');
let p04=document.querySelector('.p04');

let acar=true;

function func01(){
    if(acar==true){
        p01.style.display='none';
        acar=false;
    }else{
        p01.style.display='block';
        acar=true;
    }
}
function func02(){
    if(acar==true){
        p02.style.display='none';
        acar=false;
    }else{
        p02.style.display='block';
        acar=true;
    }
}
function func03(){
    if(acar==true){
        p03.style.display='none';
        acar=false;
    }else{
        p03.style.display='block';
        acar=true;
    }
}
function func04(){
    if(acar==true){
        p04.style.display='none';
        acar=false;
    }else{
        p04.style.display='block';
        acar=true;
    }
}