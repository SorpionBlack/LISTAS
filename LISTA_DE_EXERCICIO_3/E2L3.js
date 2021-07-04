// criar um array com números de 0 a 9
// usar o for que leia todos os números do array e multiplique eles por 1 até 10
// mostrar a tabuada

let n1 = [0,1,2,3,4,5,6,7,8,9]
console.log("\n TABUADAS DO:")

for (i = 0; i < n1.length; i++){
    console.log(`\n${n1[i]} x 1 = `+n1[i]*1)
    console.log(`${n1[i]} x 2 = `+n1[i]*2)
    console.log(`${n1[i]} x 3 = `+n1[i]*3)
    console.log(`${n1[i]} x 4 = `+n1[i]*4)
    console.log(`${n1[i]} x 5 = `+n1[i]*5)
    console.log(`${n1[i]} x 6 = `+n1[i]*6)
    console.log(`${n1[i]} x 7 = `+n1[i]*7)
    console.log(`${n1[i]} x 8 = `+n1[i]*8)
    console.log(`${n1[i]} x 9 = `+n1[i]*9)
    console.log(`${n1[i]} x 10 = `+n1[i]*10)
}