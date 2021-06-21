var buton=document.getElementsByClassName("ustpanel")
var ishare=document.getElementsByClassName("fa-arrow-circle-down")
for(var i=0;i<buton.length;i++)
{
    buton[i].onclick=function(){ 
     var panel=this.nextElementSibling;
     this.lastElementChild.classList.toggle("fa-arrow-circle-up")   
       console.log(panel)
       if(panel.style.maxHeight){
           panel.style.maxHeight=null
       }else{
           panel.style.maxHeight=panel.scrollHeight+"px"
       }
        
    }
}