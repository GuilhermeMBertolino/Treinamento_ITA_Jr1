//Exercício 21
menorNumero = (arr) => 
{
    let resposta = arr[0];
    arr.forEach((elemento) => {
        if(elemento < resposta)
            resposta = elemento;
    });
    return resposta;
}
console.log(menorNumero([2, 6, 1, -5]));

//Exercício 22
funcaoDaSorte = (num) =>
{
    let rVal = Math.ceil(Math.random() * 10);
    if (rVal === num)
        return `Parabéns! O número sorteado foi ${rVal}`;
    else
        return `Que pena! O número sorteado foi ${rVal}`;
}
for(let i = 0; i < 3; i++)
    console.log(funcaoDaSorte(i));

//Exercício 23
contarPalavras = (frase) => frase.split(' ').length;
console.log(contarPalavras("A 25 é bixo ☺"));

//Exercício 24
contarCaractere = (char, frase) => frase.split("").filter((letra) => letra == char).length;
console.log(contarCaractere("a", "Não existe caminho fácil da terra às estrelas!"));

//Exercício 25
buscarPalavrasSemelhantes = (palavra, arr) => arr.filter((p) => p.includes(palavra));
console.log(buscarPalavrasSemelhantes("pro", ["programação", "profissionalismo", "vespa", "samambaia"]));