# Memory Card Game

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Live Demo

This game has been deployed to Netlify. You can check out [the live demo here](https://caspers-memory-challenge.netlify.app).

## Running Locally

You will need node installed to run this project. If you're not sure if it's installed, go to a command line and type `node -v`. If you get a version number, great! You can proceed. If you encounter an error, you'll have to install node from [their website](https://nodejs.org/en/download/).

1. Clone the directoy to your local machine.
2. Navigate into the directory and run `npm install` to get the dependencies.
3. Run `npm run start` to fire up the project in development.
4. If it doesn't automatically load in your favorite browser, you can manually go to `localhost:3000`.

## Requirements & Game Rules

* At the start of the game, the user is presented with a grid of 24 facedown cards.
* Each card looks identical face down, but has a face-up value that is matched by only one other card on the table.
* When the user clicks a card, it flips over to reveal its value.
* When the user clicks the next card, its value is revealed and then compared against the other face up card. If they are equal, both cards disappear. If they are different, they flip back down.
* The game is continued until there are no cards left.

## Future Features

* There is an issue with timing. If you quickly click three cards, all three will flip. You should only be able to flip over two cards at a time.
* We should have a victory state. Once all the cards are successfully matched, show a victory screen with the option to play again.
* Replace the numbers on the front of the cards with symbols. This will help them scale better as the cards scale, but also is just more fun than numbers.