import { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import Card from './components/Card';
import './styles/playmat.css';

const cardExample = {
  id: 43123,          // unique id per card (will only appear once in the card array)
  symbol: 'Waterfall',
  symbolId: 4,        // id unique to each symbol (will appear twice in the card array)
  isRevealed: false,
  isMatchFound: false,
}

function App() {
  const [cardArray, setCardArray] = useState([]);
  
  useEffect(() => {
    /**
     * On first app render, create the card array.
     * First, we must create an array of 12 items. 
     * Then, we must duplicate and append that array.
     * Lastly, we must sort them randomly.
     * This way we can an array of 24 items with a duplicate of each item in any location.
     */

    // create the first array of 12 items
     let cards = new Array(12);
     for(let i = 0; i < cards.length; i++) {
       const obj = {
         id: uuid(),
         symbol: `Card Number ${i + 1}`,
         symbolId: i + 1,
         isRevealed: false,
         isMatchFound: false,
       }
       cards[i] = obj;
     }

     // create a second array of the first array, but we must update each id (note: not the symbolId)
     let dupArray = [];

     cards.forEach(card => {
      let dupCard = {...card};
      dupCard.id = uuid();
      dupArray.push(dupCard);
     });
     const fullCardArray = [...cards, ...dupArray];

     // randomize!
     const randomizedCardArray = fullCardArray.sort(() => Math.random() - 0.5);

     // of course we gotta update the app state...
     setCardArray(randomizedCardArray);
  }, [])

  const revealCard = (id) => {
    /**
     * When a facedown card is clicked, we must do the following:
     * 
     * 1. Flip face up.
     * 2. Are any other cards revealed?
     * 3. If another card is revealed, does it match this one?
     * 4. If there is a match, both cards disappear.
     * 5. If there is no match, both cards flip back down.
     */
    const newCardState = [...cardArray];
    newCardState.find(card => card.id === id).isRevealed = true;
    setCardArray(newCardState);
  }

  return (
    <div className="App">
      <div className="playmat">
        {cardArray.map(card => (
          <Card 
            key={card.id}
            handleReveal={() => revealCard(card.id)}
            symbol={card.symbol}
            isRevealed={card.isRevealed}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
