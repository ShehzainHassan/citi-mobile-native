import { Images } from '@/assets/images';
import { Button, CreditCard, Header } from '@/components';
import {
  useAccountScreenStyles,
  useAppSelector,
  useGlobalStyles,
  useUserCards,
} from '@/hooks';
import { RootState } from '@/store';
import { currencySymbolsMap } from '@/utils';
import { View } from 'react-native';
import { ChooseCardProps } from './ChooseCard.types';

export const ChooseCard = ({
  headerText,
  onBack,
  onCardPress,
  onAddCard,
}: ChooseCardProps) => {
  const globalStyles = useGlobalStyles();
  const accountScreenStyles = useAccountScreenStyles();
  const selectedCurrency = useAppSelector(
    (state: RootState) => state.settings.currency,
  );
  const symbol = currencySymbolsMap[selectedCurrency] || selectedCurrency;

  const { data } = useUserCards();
  if (!data) return;
  return (
    <View style={globalStyles.verticalSpread}>
      {(headerText || onBack) && (
        <Header title={headerText ?? ''} onPress={onBack} />
      )}
      <View style={[accountScreenStyles.cardsContainer]}>
        {data.map((card, index) => (
          <CreditCard
            key={index}
            name={card.cardholderName}
            cardType={card.cardLabel ?? ''}
            cardNumber={card.cardNumber}
            amount={`${symbol}${card.balance}`}
            backgroundImage={
              card.cardType === 'VISA' ? Images.visaCard : Images.masterCard
            }
            onPress={() => onCardPress(card)}
          />
        ))}
        {onAddCard && <Button title="Add card" onPress={onAddCard} />}
      </View>
    </View>
  );
};
