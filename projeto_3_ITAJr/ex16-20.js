//Exercício 16
checarAnoBissexto = (ano) => (ano % 4 == 0 && !(ano % 100 == 0)) || (ano % 400 == 0);
console.log(checarAnoBissexto(2020), checarAnoBissexto(2100));

//Exercício 17
somarNumeros = (arr) =>
{
    if(arr.length)
        return arr.reduce((prim, seg = 0) => prim + seg);
    else
        return 0;
}
console.log(somarNumeros([2, 4, 5, 61]), somarNumeros([5]));

//Exercício 18
despesasTotais = (despesas) => 
{
    if(despesas.length > 1)
        return despesas.map((elemento) => elemento.preco).reduce((el1, el2) => el1 + el2);
    else
        return despesas[0].preco;
}
console.log(despesasTotais([{preco: 89.99}, {preco: 100.00}, {preco: 120}]));
console.log(despesasTotais([{preco: 1244.33}]));

//Exercício 19
calcularMedia = (arr) => arr.reduce((a, b) => a + b) / arr.length;
console.log(calcularMedia([2, 5, 7, 10]));

//Exercício 20
areaDoTriangulo = (base, altura) => (base * altura / 2).toFixed(2);
console.log(areaDoTriangulo(7, 9));