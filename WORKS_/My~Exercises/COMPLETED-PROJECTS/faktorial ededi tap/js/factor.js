

function  Factorial_Tap(){
    var eded,i,factorial=1;
    eded=Number(document.getElementById('F_eded_Yaz').value)
    for(i=1;i<=eded;i++){
        factorial*=i
    }
    document.getElementById('netice').innerHTML=factorial
}