//ler o dia -> var dia
//ler o mes -> var mes
//ler o ano -> var ano
//calcular qual será o dia seguinte do informado
//mostrar resultado

var readline = require ('readline-sync')
console.log("\nINSIRA A DATA...\n")
var dia = parseInt(readline.question("Dia: "))
var mes = parseInt(readline.question("Mes: "))
var ano = parseInt(readline.question("Ano: "))

if(dia<31 && (mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12)){
    dia++
    console.log("Amanha sera dia: "+dia+"/"+mes+"/"+ano)
}
else if(dia==31 && (mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10)){
    var zerar31 = dia - 30
    mes++
    console.log("Amanha sera dia: "+zerar31+"/"+mes+"/"+ano)
}

else if(dia<30 && (mes==4 || mes==6 || mes==9 || mes==11)){
    dia++
    console.log("Amanha sera dia: "+dia+"/"+mes+"/"+ano)
}
else if(dia==30 && (mes==4 || mes==6 || mes==9 || mes==11)){
    var zerar30 = dia - 29
    mes++
    console.log("Amanha sera dia: "+zerar30+"/"+mes+"/"+ano)
}

else if (mes==2 && dia <28){
    dia++
    console.log("Amanha sera dia: "+dia+"/"+mes+"/"+ano)
}
else if(mes==2 && dia==28){
    mes++
    var zerarfev = dia - 27
    console.log("Amanha sera dia: "+zerarfev+"/"+mes+"/"+ano)
}

else if(dia==31 && mes==12){
    ano++
    zerardez = dia - 30
    zerarmes= mes - 11
    console.log("Amanha sera dia: "+zerardez+"/"+zerarmes+"/"+ano)
}

else{
    console.log("\n***OS DADOS INSERIDOS ESTAO INCORRETOS***")
}