// Criar uma função para receber um número do computador
function getComputerChoice() {
    // Sortear um número aleatório e multiplicá-lo pro 100
    let numberGuess = Math.random() * 100;
    // Se o número for entre 1 e 33.33333, ele será Rock
    if (numberGuess <= 100/3) {
        computerChoice = "Rock";
    // Se o número for entre 33.33333 e 66.66666 ele será Paper
    } else if (numberGuess > 100/3 && numberGuess <= (100/3)*2) {
        computerChoice = "Paper";
    // Do contrário, ele será Scissors.
    } else {
        computerChoice = "Scissors";
    }
    // Retornar o valor, assim saberemos o que foi sorteado para o computador.
    return computerChoice;
}

// Criar uma função para receber o palpite do usuário
function getHumanChoice () {
    // Pedir o valor para o usuário
    humanChoice = prompt("Rock, Paper or Scissors?");
    // Ajustar string digitada pelo usuário
    humanChoice = humanChoice.toUpperCase().at(0) + humanChoice.slice(1).toLowerCase();
    // Retornar a string do usuário
    return humanChoice;
}

// Criar variável com o score do computador
let computerScore = 0;

// Criar variável com o score do usuário
let humanScore = 0;

// Criar função com o jogo propriamente dito, recebendo a escolha do computador e a escolha do usuário
function playRound (humanChoice, computerChoice) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    console.log("O computador escolheu: " + computerChoice);
    console.log("Você escolheu: " + humanChoice);
    if (computerChoice == "Paper" && humanChoice == "Rock") {
        console.log("You lose! Paper beats Rock!");
        computerScore = computerScore + 1;
    } else if (computerChoice == "Scissors" && humanChoice == "Paper") {
        console.log("You lose! Scissors beats Paper!");
        computerScore = computerScore + 1;
    } else if (computerChoice == "Rock" && humanChoice == "Scissors") {
        console.log("You lose! Rock beats Scissors!");
        humanScore = humanScore + 1;
    } else if (humanChoice == "Paper" && computerChoice == "Rock") {
        console.log("You win! Paper beats Rock!");
        humanScore = humanScore + 1;
    } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
        console.log("You win! Scissors beats Paper!");
        humanScore = humanScore + 1;
    } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
        console.log("You win! Rock beats Scissors!");
        humanScore = humanScore + 1;
    } else {
        console.log("Deu empate! Jogue novamente!")
    }
}

function playGame() {
    playRound();
    console.log(`O placar atual é de: Computador ${computerScore} - Você ${humanScore}`);
    playRound();
    console.log(`O placar atual é de: Computador ${computerScore} - Você ${humanScore}`);
    playRound();
    console.log(`O placar atual é de: Computador ${computerScore} - Você ${humanScore}`);
    playRound();
    console.log(`O placar atual é de: Computador ${computerScore} - Você ${humanScore}`);
    playRound();
    console.log(`O placar final é: Computador ${computerScore} - Você ${humanScore}`);
}

playGame();