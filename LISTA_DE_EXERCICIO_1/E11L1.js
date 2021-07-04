//ler quantidade de dias -> var dias
//transfomar a quantidade de dias em anos, meses e dias -> var transf
//mostrar resultado

var ttdias = 770
var anos = ttdias/365
var mes = (ttdias%365)/30
var dias = mes%30
console.log('Estamos a '+Math.floor(anos)+' anos, '+Math.floor(mes)+' meses e '+Math.floor(dias)+' dias sem acidentes.')