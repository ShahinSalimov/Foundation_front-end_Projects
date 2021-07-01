let personal=['ehmed','Ismayil','Sebine','Subhan','Mirnadir','Sabir']
for (let i=0;i<personal.length;i++){
personal[i]=personal[i].split('')
for(let x=0;x<personal[i].length;x++){
    if(personal[i][x]=='e'||personal[i][x]=='E'){
        personal[i][x]='ə'
    }
}
personal[i]=personal[i].toString()
}
console.log(personal)