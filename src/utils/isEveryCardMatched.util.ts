import CardType from '../components/Card/card.types';

const isEveryCardMatched = (cards: CardType[]) => {
    return cards.every((card) => card.matched);
};

export default isEveryCardMatched;