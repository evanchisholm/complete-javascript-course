/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, lastDice, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', function () {
    if(gamePlaying) {
        // 1. Random number
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        var diceTotal = dice1 + dice2;

        // 2. Display the result
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
        document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

        // 3. Update the round score IF the rolled number was NOT 1
        // If this diceTotal and the last diceTotal were 12
        if (diceTotal === 12 && lastDice === 12) {
            // reset the players total score to zero
            scores[activePlayer] = 0;
            // Update the UI total score to zero
            document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
            // Next player
            nextPlayer();
        } else if (dice1 !== 1 && dice2 !== 1) {
            // Add score
            roundScore += diceTotal;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            // Next player
            nextPlayer();
        }

        lastDice = diceTotal;
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if(gamePlaying) {
        // Add current score to global score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.final-score').value;
        var winningScore;

        // Undefined, 0, null or "" are coerced to true
        if(input) {
            winningScore = input;
        } else {
            winningScore = 100;
        }

        // Check if player has won the game
        if (scores[activePlayer] >= winningScore) {
            gamePlaying = false;
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        } else {
            // Next player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    lastDice = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}

function init() {
    gamePlaying = true;
    scores = [0, 0];
    roundScore = 0;
    lastDice = 0;
    activePlayer = 0;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
}






