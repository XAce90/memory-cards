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

     // randomize! there are plenty of more sophisticated shuffle methods, but this works fine here
     const randomizedCardArray = fullCardArray.sort(() => Math.random() - 0.5);

     // of course we gotta update the app state...
     setCardArray(randomizedCardArray);
  }, []);

  const handleCardClick = async (id) => {
    /**
     * When a facedown card is clicked, we must do the following:
     * 
     * 1. Flip face up.
     * 2. Are any other cards revealed?
     * 3. If another card is revealed, does it match this one?
     * 4. If there is a match, both cards disappear.
     * 5. If there is no match, both cards flip back down.
     */

    await revealCard(id)
    
    const isAnotherCardRevealed = cardArray.filter(card => card.isRevealed && card.id !== id).length > 0;
    if(isAnotherCardRevealed) {
      const [card1, card2] = cardArray.filter(card => card.isRevealed);
      
      if(doCardsMatch(card1, card2)) {
        await handleMatch(card1, card2);
      } else {
        await handleMismatch(card1, card2);
      }
    }
  }

  const revealCard = async (id) => {
    const newCardState = [...cardArray];
    newCardState.find(card => card.id === id).isRevealed = true;
    setCardArray(newCardState);
  }
  

  const doCardsMatch = (card1, card2) => {
    if(card1.symbolId === card2.symbolId) return true;
    return false;
  }

  const handleMatch = (card1, card2) => {
    const newCardState = [...cardArray];
    newCardState
      .filter(card => card1.id === card.id || card2.id === card.id)
      .forEach(card => card.isMatchFound = true);
    setCardArray(newCardState);
  }

  const handleMismatch = async (card1, card2) => {
    // when there is a mismatch, wait some time and then flip back
    setTimeout(() => {
      const newCardState = [...cardArray];
      newCardState
        .filter(card => card1.id === card.id || card2.id === card.id)
        .forEach(card => card.isRevealed = false);
      setCardArray(newCardState);
    }, 800);
  }

  return (
    <div className="App">
      <div className="playmat">
        {cardArray.map(card => (
          <Card 
            key={card.id}
            handleReveal={() => handleCardClick(card.id)}
            symbol={card.symbolId}
            isRevealed={card.isRevealed}
            isMatched={card.isMatchFound}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
