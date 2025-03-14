import { useEffect, useState } from 'react';
import schuffledCards from '../../utils/schuffledCards.util';
import celebration from '../../utils/celebration.util';
import isEveryCardMatched from '../../utils/isEveryCardMatched.util';
import CardType from '../Card/card.types'
import Card from '../Card/Card'
import CardsProps from './cards.types';
import './Cards.css';

const Cards = ({ setGameOver, newGame }: CardsProps) => {
    const [cardProps, setCardProps] = useState<CardType[]>([])
    const [clickedCardSrc, setClickedCardSrc] = useState<string>('')
    const [clickedCardId, setClickedCardId] = useState<number>(0)

    useEffect(() => {
        const schuffled = schuffledCards()
        setCardProps(schuffled)
        console.log(schuffled)
    }, [newGame])

    useEffect(() => {
        if (isEveryCardMatched(cardProps) && cardProps.length > 0) {
            celebration();
            setClickedCardSrc('');
            setClickedCardId(0);
            setGameOver(true);
        }
    }, [cardProps, setGameOver]);

    const handleClick = (id: number) => {

        setCardProps((prevState) => {
            let newCardProps = prevState.map((card) =>
                card.id === id ? { ...card, flipped: !card.flipped, disabled: !card.disabled } : card
            )

            const clickedCard = newCardProps!.find((card) => card.id === id)

            if (clickedCardSrc === '') {
                setClickedCardSrc(clickedCard!.src)
                setClickedCardId(clickedCard!.id)
            }

            else if (clickedCard!.src === clickedCardSrc && clickedCard!.id !== clickedCardId) {
                newCardProps = newCardProps.map((card) =>
                    card.src === clickedCardSrc ? { ...card, flipped: true, matched: true, disabled: true } : card)
                setClickedCardSrc('')
            }

            else {
                setClickedCardSrc('')
                setCardProps((prevState) =>
                    prevState.map((card) =>
                        ({ ...card, disabled: true })
                    )
                )

                setTimeout(() => {
                    setCardProps((prevState) =>
                        prevState.map((card) =>
                            !card.matched ? { ...card, flipped: false, disabled: false } : card
                        ))
                }, 1000)
            }
            return newCardProps;
        })
    }

    return (
        <div className="cards">
            {cardProps.map((props) => (
                <Card
                    key={props.id}
                    id={props.id}
                    src={props.src}
                    flipped={props.flipped}
                    matched={props.matched}
                    disabled={props.disabled}
                    onClick={() => handleClick(props.id)} 
                />
            )
            )}
        </div>
    )
}

export default Cards;