Footballcular=[
    {
        ad:'Ronaldo',
        soyad:'Cristiano',
        yas:29
    },
    {
        ad:'Perlucchi',
        soyad:'Collina',
        yas:38
    },
    {
        ad:'Andrey',
        soyad:'Shevcenko',
        yas:39
    }
]

function yashTap(ad,soyad){
    for(i=0;i<3;i++){
        if(Footballcular[i].ad==ad&&Footballcular[i].soyad==soyad){
            console.log(Footballcular[i].yas)
        }
    }
}
yashTap('Perlucchi','Collina')