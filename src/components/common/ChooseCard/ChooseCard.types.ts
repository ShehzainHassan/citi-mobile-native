import { Card } from '@/types';

export type CardType = 'visa' | 'master';

export interface ChooseCardProps {
  headerText?: string;
  onBack?: () => void;
  onCardPress: (card: Card) => void;
  onAddCard?: () => void;
}
