//ler o salario do funcionario -> var salario
//ler o cargo do funcionario -> var cargo
//checar na tabela de acordo com os aumentos correspondentes
//caso nao tem o cargo, o aumento é de 40%
//mostrar salario atual, salario com aumento e a diferenca entre eles
//mostrar resultado

var readline = require ("readline-sync")
var salario = parseInt(readline.question("Insira o valor do seu salario: R$"))
var cargo = readline.question("Digite seu cargo: ")

console.log("********************************\n********************************")
console.log("Salario atual: R$"+salario.toFixed(2))

if(cargo=="gerente"){
    var ns1= (salario*0.1)+salario
    var df1= ns1 - salario
    console.log("Novo salario: R$"+ns1.toFixed(2))
    console.log("Diferença de: R$"+df1.toFixed(2))
}
else if(cargo=="engenheiro"){
    var ns2= (salario*0.2)+salario
    var df2= ns2 - salario
    console.log("Novo salario: R$"+ns2.toFixed(2))
    console.log("Diferença de: R$"+df2.toFixed(2))
}
else if(cargo=="tecnico"){
    var ns3= (salario*0.3)+salario
    var df3= ns3 - salario
    console.log("Novo salario: R$"+ns3.toFixed(2))
    console.log("Diferença de: R$"+df3.toFixed(2))
}
else{
    var ns4= (salario*0.4)+salario
    var df4= ns4 - salario
    console.log("Novo salario: R$"+ns4.toFixed(2))
    console.log("Diferença de: R$"+df4.toFixed(2))
}