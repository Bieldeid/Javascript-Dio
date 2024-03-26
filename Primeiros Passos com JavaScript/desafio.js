/*FAÇA UM PROGRAMA PARA CALCULAR O VALOR DE UMA VIAGEM: 
1 - PREÇO MÉDIO DO COMBUSTÍVEL
2 - GASTO MÉDIO DE COMBUSTÍVEL POR KM
3 - DISTÂNCIA DA VIAGEM

IMPRIMA NO CONSOLE O VALOR */

const precoMedioCombustivel = 5.79;
const consumoCombustivelKm = 12;
const distancia = 123123;

const gasto_medio = precoMedioCombustivel / consumoCombustivelKm
const valorTotal = distancia * gasto_medio

console.log("Preço médio do combustível: " + precoMedioCombustivel);
console.log("Consumo de combustível por KM: " + consumoCombustivelKm);
console.log("Distância percorrida: " + distancia + "km");
console.log("\nGasto médio: R$" + gasto_medio.toFixed(2));
console.log("Valor total: R$" + valorTotal.toFixed(2));