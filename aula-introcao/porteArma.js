const readline = require('readline').createInterface({
    input : process.stdin, 
    output : process.stdout
});

console.log('Programa destinado a checar sua idade e verificar se você possui os pre requisitos para tirar o porte de arma.\n');
console.log('Nesse programa iremos levar em consideração a idade, residencia fixa e verificar se você tenha ocupação licita e \nefetuado o treinamento de manuseio e equilíbrio para o porte de arma através do seu nome completo.');

readline.question('Qual o seu ano de nascimento: ', ano =>{
    if (ano > 1997){
        console.log('Porte de arma Negado. ');
    }else{
        readline.question('Possui residencia fixa: (SIM|NâO) ', residenciaFixa => {
            if(!(residenciaFixa.toUpperCase() === "SIM" )){
                console.log('Porte de arma Negado.');
            }
            else{
                readline.question('Nome completo: ', nomeCompleto =>{
                    switch(nomeCompleto){
                        case "Mario Rodrigues" : console.log("Consta no sistema que Mario Rodrigues possui ocupação licita e treinamento de manuseio de arma de fogo.");
                        break;
                        case "Murilo Maia" : console.log("Consta no sistema que Murilo Maia possui ocupação licita e treinamento de manuseio de arma de fogo.");
                        break;
                        case "José Arruda" : console.log("Consta no sistema que José Arruda possui ocupação licita e treinamento de manuseio de arma de fogo.");
                        break;
                        case "John Wick" : console.log("Consta no sistema que John Wick possui ocupação licita e treinamento de manuseio de arma de fogo.");
                        break;
                        default:
                            console.log('O nome informando não se encontra no sistema.')
                    }
              })
            }
        })
    }
})



