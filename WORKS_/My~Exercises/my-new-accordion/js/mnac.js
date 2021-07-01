let accordion = document.getElementsByClassName(".accordion-box");

for (let i=0; i<acc.length; i++)
{
	accordion[i].onclick=function(){
	this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  };
}