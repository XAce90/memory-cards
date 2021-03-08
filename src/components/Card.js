import PropTypes from 'prop-types';
import { GiAbstract050 as CardBack } from 'react-icons/gi';
import '../styles/card.css';

export default function Card(props) {
  return (
    <div className="card">
      <div className="card__back">
        <CardBack />
      </div>
      <div className="card__front">
        {props.symbol}
      </div>
    </div>
  )
}

Card.propTypes = {
  isRevealed: PropTypes.bool.isRequired,
  symbol: PropTypes.any.isRequired, // todo: make this more specific
}

Card.defaultProps = {
  isRevealed: false,
}