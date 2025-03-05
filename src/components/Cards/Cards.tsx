import Card from '../Card/Card'
import { schuffledCards } from '../../utils/schuffledCards.util';
import { useEffect, useState } from 'react';
import { CardProps } from '../Card/Card';


const Cards = () => {
    const [cardProps, setCardProps] = useState<CardProps[]>([])
    useEffect(() => {
        setCardProps(schuffledCards())
        console.log(schuffledCards())
    }, [])

    const handleClick = (id: number) => {
        setCardProps((prevState)=> {
            return prevState.map((card) =>
            card.id === id? {...card, flipped: !card.flipped} : card
            )
        }
        
        )
    }

    return (
        <div className='flex flex-wrap justify-center'>
            {cardProps.map((props) => (
                <Card key={props.id} id={props.id} src={props.src} flipped={props.flipped} onClick={() => handleClick(props.id)}></Card>
            )
            )}
        </div>
    )
}

export default Cards;