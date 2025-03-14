import alpaka_01 from '../assets/alpaka_01.png';
import alpaka_02 from '../assets/alpaka_02.png';
import alpaka_03 from '../assets/alpaka_03.png';
import alpaka_04 from '../assets/alpaka_04.png';
import alpaka_05 from '../assets/alpaka_05.png';
import CardType from '../components/Card/card.types'


const cards = [alpaka_01, alpaka_02, alpaka_03, alpaka_04, alpaka_05]

const schuffledCards = (): CardType[] => {
    let counter = 0;

    const cardProps = cards.flatMap((card) => ([
        { id: counter++, src: card, flipped: false, matched: false, disabled: false, onClick: () => {}},
        { id: counter++, src: card, flipped: false, matched: false, disabled:false, onClick: () => {}}]
))
    cardProps.sort(() => Math.random() - 0.5)
    return cardProps
}

export default schuffledCards;