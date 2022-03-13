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

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

const rollDice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

// const switchPlayer = function () {
//   activePlayer = Number(!activePlayer);
//   togglePlayerActive();
// };

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

btnRollDice.addEventListener('click', () => {
  const dice = rollDice();
  if (diceEl.classList.contains('hidden')) diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  console.log(`Dice rolled: ${dice} // Current Player: ${activePlayer}`);

  // check for a roll == 1
  if (dice === 1) {
    switchPlayer();
    // switch player
    // switchPlayer();
    // using bool logic because there are only 2 players, otherwise new system has to be implemented
    // change hidden / active css styling
    // reset scores
  } else {
    // add a rol to current player's score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
});

btnHoldGame.addEventListener('click', () => {
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  switchPlayer();

  if (scores[activePlayer] >= 100) {
    document
      .querySelector(`player--${activePlayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`player--${activePlayer}`)
      .classList.remove('player--active');
  }
  // // 1. add current score to the score of active player's score
  // scores[activePlayer] = currentScore;
  // togglePlayerActive();
  // activePlayer = activePlayer === 0 ? 1 : 0;
  // currentScore = scores[activePlayer];
  // document.getElementById(`score--${activePlayer}`).textContent = currentScore;
  // 2. check if score's at least 100
  // 3. finish the game or switch to the next player
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
