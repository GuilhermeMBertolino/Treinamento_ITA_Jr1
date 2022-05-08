//Exercício 26
removerVogais = (frase) =>
{
    let vogais = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return frase.split('').filter((letra) => !vogais.includes(letra)).join('');
}
console.log(removerVogais("Bom dia, meu nome e Guilherme!"));

//Exercício 27
inverter = (obj) =>
{
    let resposta = {};
    Object.entries(obj).forEach((chaveValor) => { resposta[chaveValor[1]] = `${chaveValor[0]}`; });
    return resposta;
}
console.log(inverter({a: 2, b: 5, 3: 'x'}));

//Exercício 28
filtrarPorQuantidadeDeDigitos = (arr, n) => 
    arr.filter((num) => num >= Math.pow(10, n - 1) && num < Math.pow(10, n));
console.log(filtrarPorQuantidadeDeDigitos([4, 6, 12, 764, 100, 21, 10, 40], 2));

//Exercício 29
segundoMaior = (arr) =>
{
    let maior = arr[0];
    let segMaior;
    arr.forEach((num) =>
    {
        if(num > maior)
        {
            segMaior = maior;
            maior = num;
        }

    });
    return segMaior;
}
console.log(segundoMaior([2, 25, 42, 321, 4, 6]));

//Exercício 30
receberMelhorEstudante = (obj) =>
{
    let estudantes = Object.entries(obj);
    let melhorMed = 0;
    let melhorEst;
    estudantes.forEach((est) => {
        let media = est[1].reduce((prim, seg) => prim + seg) / est[1].length;
        if(media > melhorMed)
        {
            melhorMed = media;
            melhorEst = est[0];
        }
    });
    return {nome: melhorEst, media: melhorMed};
}
console.log(receberMelhorEstudante((
{
    Joao: [8, 7.6, 8.9, 6],
    Mariana: [9, 6.6, 7.9, 8],
    Carla: [7, 7, 8, 9]
})));