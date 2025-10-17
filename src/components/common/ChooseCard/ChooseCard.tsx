import { Images } from '@/assets/images';
import { Button, CreditCard, Header } from '@/components';
import { useAccountScreenStyles, useGlobalStyles } from '@/hooks';
import { View } from 'react-native';
import { ChooseCardProps } from './ChooseCard.types';

export const ChooseCard = ({
  headerText,
  onBack,
  cards,
  onCardPress,
  onAddCard,
}: ChooseCardProps) => {
  const globalStyles = useGlobalStyles();
  const accountScreenStyles = useAccountScreenStyles();

  return (
    <View style={globalStyles.verticalSpread}>
      {(headerText || onBack) && (
        <Header title={headerText ?? ''} onPress={onBack} />
      )}
      <View style={[accountScreenStyles.cardsContainer]}>
        {cards.map((card, index) => (
          <CreditCard
            key={index}
            name={card.name}
            cardType={card.cardText}
            cardNumber={card.cardNumber}
            amount={card.amount}
            backgroundImage={
              card.type === 'visa' ? Images.visaCard : Images.masterCard
            }
            onPress={() => onCardPress(card)}
          />
        ))}
        {onAddCard && <Button title="Add card" onPress={onAddCard} />}
      </View>
    </View>
  );
};
