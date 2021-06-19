
   let bal;
bal=0;
function imtahanBali(){
bal=prompt('zehmet olmazsa imtahan balinizi daxil edin')
if(bal<0||bal>100){
  console.log('deyer duzgun daxil edilmeyib')
}
  else 
    if(bal>=0&&bal<=50){
console.log('tenbelsen')
  }
   else 
     if(bal>=50&&bal<=70){
console.log('meqbuldur')
  }
   else{
console.log('mohteshemsen')
  }
}
imtahanBali() 