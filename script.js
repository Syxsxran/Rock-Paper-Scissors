const choices = ['rock', 'paper', 'scissors'];
    const resultDiv = document.getElementById('result');
    const playerWinsSpan = document.getElementById('player-wins');
    const botWinsSpan = document.getElementById('bot-wins');
    const tiesSpan = document.getElementById('ties');
    const roundSpan = document.getElementById('round');

    let playerWins = 0;
    let botWins = 0;
    let ties = 0;
    let rounds = 0;

    document.getElementById('rock').addEventListener('click', () => playGame('rock'));
    document.getElementById('paper').addEventListener('click', () => playGame('paper'));
    document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));

    function playGame(userChoice) {
      const computerChoice = choices[Math.floor(Math.random() * choices.length)];
      let result = '';

      rounds++;
      roundSpan.innerText = rounds;

      if (userChoice === computerChoice) {
        result = 'It\'s a tie!';
        ties++;
        tiesSpan.innerText = ties;
      } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
      ) {
        result = 'You win!';
        playerWins++;
        playerWinsSpan.innerText = playerWins;
      } else {
        result = 'You lose!';
        botWins++;
        botWinsSpan.innerText = botWins;
      }

      resultDiv.innerHTML = `You chose <strong>${userChoice}</strong>. Computer chose <strong>${computerChoice}</strong>. ${result}`;
    }
