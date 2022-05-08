//Exercício 1
cumprimentar = (nome) => `Olá ${nome}!`;
console.log(cumprimentar("Guilherme"));

//Exercício 2
converterIdadeEmAnosParaDias = (idade) => 365 * idade;
console.log(converterIdadeEmAnosParaDias(25), converterIdadeEmAnosParaDias(70));

//Exercício 3
calcularSalario = (horas, salHora) => horas * salHora;
console.log(calcularSalario(150, 40.5));

//Exercício 4
nomeDoMes = (mes) =>
{
    let resposta;
    switch (mes)
    {
        case 1:
            resposta = "Janeiro";
            break;
        case 2:
            resposta = "Fevereiro";
            break;
        case 3:
            resposta = "Março";
            break;
        case 4:
            reposta = "Abril";
            break;
        case 5:
            resposta = "Maio";
            break;
        case 6:
            resposta = "Junho";
            break;
        case 7:
            resposta = "Julho";
            break;
        case 8:
            resposta = "Agosto";
            break;
        case 9:
            resposta = "Setembro";
            break;
        case 10:
            resposta = "Outubro";
            break;
        case 11:
            resposta = "Novembro";
            break;
        case 12:
            resposta = "Dezembro";
            break;
        default:
            resposta = "Esse mês não existe";
    }
    return resposta;
}
console.log(nomeDoMes(2), nomeDoMes(11));

//Exercício 5
maiorOuIgual = (n1, n2) => n1 >= n2;
console.log(maiorOuIgual(3, 4), maiorOuIgual(4, 4), maiorOuIgual(5, 4));