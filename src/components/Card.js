import PropTypes from 'prop-types';
import { GiAbstract031 as CardBack } from 'react-icons/gi';
import '../styles/card.css';

export default function Card(props) {
  const cardClasses = ['card'];
  if(props.isRevealed) {
    cardClasses.push('card--isRevealed');
  }
  if(props.isMatched) {
    cardClasses.push('card--isMatched');
  }
  return (
    <div className={cardClasses.join(' ')}>
      <div className="card__back" onClick={props.handleReveal}>
        <CardBack />
      </div>
      <div className="card__front">
        <div className="card__symbol">
          {props.symbol}
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  isRevealed: PropTypes.bool.isRequired,
  handleReveal: PropTypes.func.isRequired,
  symbol: PropTypes.any.isRequired, // todo: make this more specific
  isMatched: PropTypes.bool.isRequired,
}

Card.defaultProps = {
  isRevealed: false,
  isMatched: false,
}