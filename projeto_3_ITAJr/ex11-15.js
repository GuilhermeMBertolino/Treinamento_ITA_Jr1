//Exercício 11
receberPrimeiroEUltimoElemento = (arr) =>
{
    let resposta = [];
    resposta.push(arr[0]);
    resposta.push(arr[arr.length - 1]);
    return resposta;
}
console.log(receberPrimeiroEUltimoElemento(["Ameixa", "Barata", "Pinguim", "Alicate"]));

//Exercício 12
removerPropriedade = (obj, prop) =>
{
    let objResposta = {};
    let keyValues = Object.entries(obj);
    keyValues.forEach((chaveValor) => {
        if(chaveValor[0] != prop)
            objResposta[chaveValor[0]] = chaveValor[1];
    });
    return objResposta;
}
console.log(removerPropriedade({a: 1, b: 2, c: 3}, "a"));

//Exercício 13
filtrarNumeros = (arr) => arr.filter((elemento) => typeof(elemento) == "number");
console.log(filtrarNumeros(["6", 2, 3, "jaca", [1, 3], 6]), filtrarNumeros(['a', 'b']));

//Exercício 14
objetoParaArray = (obj) => Object.entries(obj);
console.log(objetoParaArray({nome: "maria", profissao: "desenvolvedora"}));

//Exercício 15
receberSomenteOsParesDeIndicesPares = (arr) =>
    arr.filter((elemento, indice) => elemento % 2 == 0 && indice % 2 == 0);
console.log(receberSomenteOsParesDeIndicesPares([1, 70, 42, 43, 6, 12]));