export default interface CardType {
    id: number,
    src: string,
    flipped: boolean,
    matched: boolean,
    disabled: boolean,
    onClick: () => void,
}