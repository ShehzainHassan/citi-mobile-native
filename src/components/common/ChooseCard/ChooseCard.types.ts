export type CardType = 'visa' | 'master';

export interface Card {
  name: string;
  cardText: string;
  cardNumber: string;
  amount: string;
  type: CardType;
}

export interface ChooseCardProps {
  headerText?: string;
  onBack?: () => void;
  cards: Card[];
  onCardPress: (card: Card) => void;
  onAddCard?: () => void;
}
