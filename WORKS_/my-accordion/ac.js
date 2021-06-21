var buton=document.getElementsByClassName("ustpanel")

for(var i=0;i<buton.length;i++)
{
    buton[i].onclick=function(){ 
     var panel=this.nextElementSibling;   
       console.log(panel)
       if(panel.style.maxHeight){
           panel.style.maxHeight=null
       }else{
           panel.style.maxHeight=panel.scrollHeight+"px"
       }
        
    }
}