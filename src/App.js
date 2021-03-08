import Card from './components/Card';
import './styles/playmat.css';

function App() {
  let cardArray = new Array(24);
  for(let i = 0; i < cardArray.length; i++){
    cardArray[i] = i + 1;
  }
  console.log(cardArray);
  return (
    <div className="App">
      <div className="playmat">
        {cardArray.map(cardId => (
          <Card key={cardId} symbol="Hello World" />
        ))}
      </div>
    </div>
  );
}

export default App;
