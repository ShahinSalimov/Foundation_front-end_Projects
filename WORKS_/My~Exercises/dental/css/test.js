ededler=[
    1,//0
    34,//1
    23,//2
    4,//3
    67,//4
    12,//5
    11//6
]



function TekYerdeDuranEdedlerinCemi(){
    let tekYerDuranCemi=0
for(i=0;i<ededler.length;i++){
if(i%2!=0){
    tekYerDuranCemi+=ededler[i]
}
}
console.log(tekYerDuranCemi)
}
TekYerdeDuranEdedlerinCemi()