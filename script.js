'use strict';

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');

const btnRollDice = document.querySelector('.btn--roll');
const btnNewGame = document.querySelector('.btn--new');
const btnHoldGame = document.querySelector('.btn--hold');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const rollDice = function () {
  return Math.floor(Math.random() * 6) + 1;
};

btnRollDice.addEventListener('click', () => {
  const dice = rollDice();
  if (diceEl.classList.contains('hidden')) diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  console.log(`Dice rolled: ${dice}`);

  // check for a roll == 1
  if (dice === 1) {
    // switch player
    // using bool logic because there are only 2 players, otherwise new system has to be implemented
    // change hidden / active css styling
    // reset scores
  } else {
    // add a rol to current player's score
  }
});
