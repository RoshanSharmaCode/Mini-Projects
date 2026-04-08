const playBtn = document.querySelectorAll('.play');
const displayScores = document.querySelector('.scores');
const restartBtn = document.querySelector('.reset-btn');
const player = document.querySelector('.player-choice');
const computer = document.querySelector('.computer-choice');
const message = document.querySelector('.message');

let scoreBord = {
  wins : 0,
  losses : 0,
  ties: 0
}

/*
playBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    let playerChoice = btn.dataset.choice;
    console.log('Player choice =', playerChoice);
  });
});
*/

playBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
    const randomNum = Math.random();

    let playerChoice = btn.dataset.choice;
    let computerChoice = '';
    let scores = '';

    if(randomNum === 0 || randomNum <= 1/3) {
      computerChoice = 'Rock';
    } else if (randomNum === 1/3 || randomNum <= 2/3) {
      computerChoice = 'Paper';
    } else if (randomNum === 2/3 || randomNum <= 1) {
      computerChoice = 'Scissors';
    }

    if(computerChoice === 'Rock') {
      if(playerChoice === 'Rock') {
        scores = 'Tie';
      } else if(playerChoice === 'Paper') {
        scores = 'Win';
      } else if(playerChoice === 'Scissors') {
        scores = 'Lose';
      }
    } else if (computerChoice === 'Paper') {
      if(playerChoice === 'Rock') {
        scores = 'Lose';
      } else if(playerChoice === 'Paper') {
        scores = 'Tie';
      } else if(playerChoice === 'Scissors') {
        scores = 'Win';
      }
    } else if (computerChoice === 'Scissors') {
      if(playerChoice === 'Rock') {
        scores = 'Win';
      } else if(playerChoice === 'Paper') {
        scores = 'Lose';
      } else if(playerChoice === 'Scissors') {
        scores = 'Tie';
      }
    }
    if(scores === 'Win') {
      scoreBord.wins++;
      message.innerHTML = 'You Win!';
      message.style.color = "lightgreen";
    } else if (scores === 'Lose') {
      scoreBord.losses++;
      message.innerHTML = 'You Lose!';
      message.style.color = "red";
    } else if (scores === 'Tie') {
      scoreBord.ties++;
      message.innerHTML = 'Tie';
      message.style.color = "black";
    }

    displayScores.innerHTML = `Wins: ${scoreBord.wins} Losses: ${scoreBord.losses} Ties: ${scoreBord.ties}`;

    player.innerHTML = `Player: ${playerChoice}`;
    computer.innerHTML = `Computer: ${computerChoice}`;    
  });
});

restartBtn.addEventListener('click', () => {
  scoreBord = {
    wins : 0,
    losses : 0,
    ties: 0
  }

  displayScores.innerHTML = 'Play Again';

  player.innerHTML = '';
  computer.innerHTML = '';

  message.innerHTML = '';
});



