# Memory Card Game

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Live Demo

This game has been deployed to Netlify. You can check out the live demo here: https://caspers-memory-challenge.netlify.app.

## Requirements & Game Rules

* At the start of the game, the user is presented with a grid of 24 facedown cards.
* Each card looks identical face down, but has a face-up value that is matched by only one other card on the table.
* When the user clicks a card, it flips over to reveal its value.
* When the user clicks the next card, its value is revealed and then compared against the other face up card. If they are equal, both cards disappear. If they are different, they flip back down.
* The game is continued until there are no cards left.

## Future Features

* Revisit the app on mobile emulators to see how the responsiveness works.
* There is an issue with timing. If you quickly click three cards, all three will flip. You should only be able to flip over two cards at a time.
* We should have a victory state. Once all the cards are successfully matched, show a victory screen with the option to play again.