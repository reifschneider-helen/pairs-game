import Card from '../Card/Card'
import { schuffledCards } from '../../utils/schuffledCards.util';
import { useEffect, useState } from 'react';
import { CardProps } from '../Card/Card';
import './Cards.css';


const Cards = () => {
    const [cardProps, setCardProps] = useState<CardProps[]>([])
    const [clickedCardSrc, setClickedCardSrc] = useState<string>('')
    const [clickedCardId, setClickedCardId] = useState<number>(0)
    useEffect(() => {
        setCardProps(schuffledCards())
    }, [])

    const handleClick = (id: number) => {

        setCardProps((prevState) => {
            let newCardProps = prevState.map((card) =>
                card.id === id ? { ...card, flipped: !card.flipped, disabled: !card.disabled } : card
            )

            const clickedCard = newCardProps.find((card) => card.id === id)

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
                    onClick={() => handleClick(props.id)}></Card>
            )
            )}
        </div>
    )
}

export default Cards;