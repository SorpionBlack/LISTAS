//criar um indice que varia entre 1000 e 2000
//mostrar quais numeros desse intervalo são divisiveis por 11 e restam 5

for(let i=1000; i<2000; i++){
    if (i%11==5){
        console.log(`O número ${i} quando é dividido por 11, resta 5.` )
    }
}