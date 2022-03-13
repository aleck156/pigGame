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
  // console.log(rollDice());
  const dice = rollDice();
  // display the dice
  if (diceEl.classList.contains('hidden')) diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // check for a roll == 1
  if (dice === 1) {
  } else {
  }
  // true = switch to next player
  // false = add to current player's score
});
