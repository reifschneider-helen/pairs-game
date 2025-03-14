import cards_back from '../../assets/cards_back.png';
import CardType from './card.types'
import './Card.css';

const Card = (props: CardType) => {
    return (
      <button className={`card ${props.flipped? "card-flipped" : ""}`} onClick={props.onClick} disabled={props.disabled}>
        <div className="card-inner">
          <img className="card-back" src={props.src} alt={`card-${props.id}`} />
          <img className="card-front" src={cards_back} alt="Card Back" />
          </div>
        </button>
    )
}

export default Card;