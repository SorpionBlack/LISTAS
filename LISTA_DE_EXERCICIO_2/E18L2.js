//ler o dia -> var dia
//ler o mes -> var mes
//ler o ano -> var ano
//calcular qual foi o dia anterior do informado
//mostrar resultado

var readline = require ('readline-sync')
console.log("\nINSIRA A DATA...\n")
var dia = parseInt(readline.question("Dia: "))
var mes = parseInt(readline.question("Mes: "))
var ano = parseInt(readline.question("Ano: "))

if((dia>1 && dia<=31) && (mes==1 || mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12)){
    dia--
    console.log("Ontem foi dia: "+dia+"/"+mes+"/"+ano)
}
else if(dia==1 && (mes==3 || mes==5 || mes==7 || mes==8 || mes==10 || mes==12)){
    var zerar31 = dia + 29
    mes--
    console.log("Ontem foi dia: "+zerar31+"/"+mes+"/"+ano)
}

else if((dia>1 && dia<=30) && (mes==4 || mes==6 || mes==9 || mes==11)){
    dia--
    console.log("Ontem foi dia: "+dia+"/"+mes+"/"+ano)
}
else if(dia==1 && (mes==4 || mes==6 || mes==9 || mes==11)){
    var zerar30 = dia + 30
    mes--
    console.log("Ontem foi dia: "+zerar30+"/"+mes+"/"+ano)
}

else if (mes==2 && dia <=28){
    dia--
    console.log("Ontem foi dia: "+dia+"/"+mes+"/"+ano)
}
else if(mes==2 && dia==1){
    mes--
    var zerarfev = dia + 30
    console.log("Ontem foi dia: "+zerarfev+"/"+mes+"/"+ano)
}

else if(dia==1 && mes==1){
    ano--
    zerardez = dia + 30
    zerarmes= mes + 11
    console.log("Ontem foi dia: "+zerardez+"/"+zerarmes+"/"+ano)
}

else{
    console.log("\n***OS DADOS INSERIDOS ESTAO INCORRETOS***")
}