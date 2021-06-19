let img = document.querySelector(".photos img");
let imgsrc = [
  "../photo/1.jpg",
  "../photo/2.jpg",
  "../photo/3.jpg",
  "../photo/4.jpg",
  "../photo/5.jpg",
  "../photo/6.jpg",
  "../photo/7.jpg",
  "../photo/8.jpg",
  "../photo/9.jpg",
  "../photo/10.jpg",
];
let cevir = 0;
function goLeft() {
    if (cevir <1) {
        img.setAttribute("src", imgsrc[cevir]);
        cevir = 9;
      } else {
        img.setAttribute("src", imgsrc[cevir]);
        cevir--;
      }
}
function goRight() {
  if (cevir > 9) {
    img.setAttribute("src", imgsrc[cevir]);
    cevir = 0;
  } else {
    img.setAttribute("src", imgsrc[cevir]);
    cevir++;
  }
}

