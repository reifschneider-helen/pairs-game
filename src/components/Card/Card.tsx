import cards_back from '../../assets/cards_back.png';
import './Card.css';

export interface CardProps {
    id: number,
    src: string,
    flipped: boolean,
    matched?: boolean,
    onClick: () => void,
}

const Card = (props: CardProps) => {
    return (
        <div onClick = {props.onClick}>
            {props.flipped ? (
            <img src={props.src} alt={`card-${props.id}`} />
          ) : (
            <img src={cards_back} alt="Card Back" />
          )}
        </div>
    )
}

export default Card;