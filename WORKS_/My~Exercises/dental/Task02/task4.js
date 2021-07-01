let personal=['ehmed','Ismayil','Sebine','Subhan','Mirnadir','Sabir']

let sait=['a','A','e','E','i','I','o','O','u','U'] //evvelce saitlere gore array duzeldirik...

let saitToplam=0; // sonra hemin sait sayisini qeyd etmek ucun deyishen duzeldirik...

let sondan2ciDeyer=personal[personal.length-2] //sondan 2-ci elementi bir deyishene menimsedirik....

sondan2ciDeyer=sondan2ciDeyer.split('') // sonra hemin deyisheni  array-e ceviririk(sozdeki herifleri parcalamaq ucun..)

for(let i=0;i<sondan2ciDeyer.length;i++){ //elementi for vasitesile dovr eletdiririk

    for(let x=0;x<sait.length;x++){ //sonra saitleri dovr eletdiririk

        if(sondan2ciDeyer[i]==sait[x]){ ///burada bir-birine beraberdirlerse,

            saitToplam++  //beraberdirlerse 1 atdiracaq
        }
    }
}
console.log(saitToplam)