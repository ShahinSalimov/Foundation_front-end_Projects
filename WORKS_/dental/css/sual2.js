
function yoxlama(){
  let a=prompt('zehmet olmazsa a deyerini daxil edin')
  let b=prompt('zehmet olmazsa b deyerini daxil edin')
  if(!(a<0||a>0)){
    console.log('a deyeri eded deyil ve eded daxil edin')
  }
  else 
    if(a<0||a>0){
    console.log('a deyeri ededdir ve emeliyyata davam edin')
  }
  else
  if(a>b){
console.log('b ededinden kicik eded daxil edin')
  }
}

yoxlama()