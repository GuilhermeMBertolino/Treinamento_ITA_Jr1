//Exercício 6
inverso = (num) =>
{
    if(num === true || num === false)
        return !num;
    else if(typeof(num) === "number")
        return -num;
    else
        return `booleano ou número esperados, mas o parâmetro é do tipo ${typeof num}`; 
}
console.log(inverso(true), inverso(2), inverso("6"));

//Exercício 7
estaEntre = (numero, minimo, maximo, inclusivo = false) =>
{
    if(inclusivo)
        return numero >= minimo && numero <= maximo;
    else
        return numero > minimo && numero < maximo;
}
console.log(estaEntre(10, 100, 50), estaEntre(3, 3, 150), estaEntre(3, 3, 150, true));

//Exercício 8
multiplicar = (n1, n2) =>
{
    let resposta = 0;
    for(let i = 0; i < n2; i++)
        resposta += n1;
    return resposta;
}
console.log(multiplicar(2, 4), multiplicar(0, 5), multiplicar(4, 3));

//Exercício 9
repetir = (elemento, vezes) =>
{
    let resposta = [];
    for(let i = 0; i < vezes; i++)
        resposta.push(elemento);
    return resposta;
}
console.log(repetir("Cavalo", 5));

//Exercício 10
simboloMais = (n) =>
{
    let resposta = "";
    for(let i = 0; i < n; i++)
        resposta += "+";
    return resposta;
}
console.log(simboloMais(4), simboloMais(5));