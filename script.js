'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');

const btnRollDice = document.querySelector('.btn--roll');
const btnNewGame = document.querySelector('.btn--new');
const btnHoldGame = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const rollDice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

const togglePlayerActive = function () {
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  console.log(`Switching active player to ${activePlayer}`);
  togglePlayerActive();
  currentScore = 0;
};

const init = function () {
  // set initial values to game scores
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  // update the page
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  // update css classes
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');

  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  diceEl.classList.add('hidden');

  // reset scores
  scores[0] = scores[1] = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;
};

init();

btnNewGame.addEventListener('click', init);

btnRollDice.addEventListener('click', () => {
  if (playing) {
    const dice = rollDice();
    if (diceEl.classList.contains('hidden')) diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    console.log(`Dice rolled: ${dice} // Current Player: ${activePlayer}`);

    // check for a roll == 1
    if (dice === 1) {
      switchPlayer();
    } else {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});

btnHoldGame.addEventListener('click', () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

/*
1. make a separate branch for this piece of code
2. refactor it so that it uses objects instead of global variables spreaded all over the place
3. test it - code not tested is a code not valid
4. optimize readability over anything else
5. add modal at the page load - game rules,
    // closing off modal = esc key, close button, clicking on overlay

const gameScore = {
  activePlayer: 0,
  player0: {
    currentGameScore: 0,
    totalScore: 0,
  },
  player1: {
    currentGameScore: 0,
    totalScore: 0,
  },
};

*/
