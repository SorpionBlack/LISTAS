//ler a quantidade de conjuntos que serão inseridos -> var conj
//ler os 3 valores inseridos -> var n1, n2 e n3
//se estiverem em ordem crescente, o programa rodará! caso não, não rodará
//calcular a soma de cada conjunto -> var soma
//calcular o produto dos numeros de cada conjunto -> var produto
//calcular a media de cada conjunto -> var media
//mostrar os resultados

let readline = require ("readline-sync")
console.log("\n***INSIRA OS VALORES EM ORDEM CRESCENTE***")
var conj = readline.question("\nInsira a quantidade de conjuntos: ")

for(i=1; i<=conj; i++){
    var n1 = parseFloat(readline.question("Digite o primeiro numero: "))
    var n2 = parseFloat(readline.question("Digite o segundo numero: "))
    var n3 = parseFloat(readline.question("Digite o terceiro numero: "))

    if(n1 < n2 && n2 < n3){
        do {
            var soma = n1+n2+n3
            var produto = n1*n2*n3
            var media = (soma/3)
        } 
        while (n1 > n2 > n3)
        console.log(`A soma dos números é ${soma}, o produto dos números é ${produto} e a média é ${media.toFixed(2)}.\n`)
    }
    else{
        console.log("\nPARA O PROGRAMA RODAR PERFEITAMENTE É NECESSARIO QUE OS NUMEROS INSERIDOS ESTEJAM EM ORDEM CRESCENTE\n")
    }
}