//ler oo codigo do item do pedido -> var codigo
//ler a quantidade -> var quant
//calcular valor a pagar
//mostrar resultado

var readline = require ("readline-sync")
console.log(" Codigo |  Preço unitário\n  100   |  Cachorro quente 1,10\n  101   |  Bauru simples 1,30\n  102   |  Bauru c/ovo 1,50")
console.log("  103   |  Hamburger 1,10\n  104   |  Cheeseburger 1,30\n  105   |  Refrigerante 1,00\n")

var codigo=parseInt(readline.question("Insira o codigo do item: "))
var quant=parseInt(readline.question("Insira a quantidade: "))

if (codigo==100){
    var cq=quant*1.1
    console.log("Valor a ser pago: R$"+cq.toFixed(2))
}
    else if (codigo==101){
        var bs=quant*1.3
        console.log("Valor a ser pago: R$"+bs.toFixed(2))
    }
    else if (codigo==102){
        var bo=quant*1.5
        console.log("Valor a ser pago: R$"+bo.toFixed(2))
    }
    else if (codigo==103){
        var hg=quant*1.1
        console.log("Valor a ser pago: R$"+hg.toFixed(2))
    }
    else if (codigo==104){
        var cb=quant*1.3
        console.log("Valor a ser pago: R$"+cb.toFixed(2))
    }
    else if (codigo==105){
        var rf=quant*1
        console.log("Valor a ser pago: R$"+rf.toFixed(2))
    }
else{
    console.log("CODIGO INVALIDO!")
}