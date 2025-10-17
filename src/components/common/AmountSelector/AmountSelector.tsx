import React from 'react';
import { View } from 'react-native';
import { Button, Input } from '@/components';
import { useGlobalStyles } from '@/hooks';
import { AmountSelectorProps } from './AmountSelector.types';

export const AmountSelector: React.FC<AmountSelectorProps> = ({
  amounts,
  selectedAmount,
  customAmount,
  onAmountPress,
  onCustomAmountChange,
}) => {
  const globalStyles = useGlobalStyles();
  const showCustomInput = selectedAmount === 'Other';

  return (
    <View>
      {showCustomInput && (
        <Input
          placeholder="Enter amount"
          keyboardType="numeric"
          value={customAmount}
          onChangeText={onCustomAmountChange}
          style={globalStyles.mediumSpacedContainer}
        />
      )}

      <View style={globalStyles.rowWrap}>
        {amounts.map(amt => {
          const isSelected = selectedAmount === amt;

          return (
            <View key={amt} style={globalStyles.amountWrapper}>
              <Button
                title={amt}
                variant={isSelected ? 'primary' : 'secondary'}
                onPress={() => onAmountPress(amt)}
                style={!isSelected ? globalStyles.amountBtn : undefined}
                textStyle={!isSelected ? globalStyles.textDefault : undefined}
              />
            </View>
          );
        })}
      </View>
    </View>
  );
};
