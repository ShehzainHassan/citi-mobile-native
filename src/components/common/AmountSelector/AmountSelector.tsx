import { Button, Input } from '@/components';
import { useGlobalStyles } from '@/hooks';
import React from 'react';
import { View } from 'react-native';
import { AmountSelectorProps } from './AmountSelector.types';

export const AmountSelector: React.FC<AmountSelectorProps> = ({
  amounts,
  selectedAmount,
  customAmount,
  onAmountPress,
  onCustomAmountChange,
}) => {
  const globalStyles = useGlobalStyles();

  return (
    <View>
      {selectedAmount === 'Other' && (
        <Input
          placeholder="Enter amount"
          keyboardType="numeric"
          value={customAmount}
          onChangeText={onCustomAmountChange}
          style={globalStyles.mediumSpacedContainer}
        />
      )}

      <View style={globalStyles.amountContainer}>
        {amounts.map((amt, index) => (
          <View key={index} style={globalStyles.amountWrapper}>
            <Button
              title={amt}
              variant={selectedAmount === amt ? 'primary' : 'secondary'}
              onPress={() => onAmountPress(amt)}
              style={selectedAmount !== amt && globalStyles.amountBtn}
              textStyle={selectedAmount !== amt && globalStyles.textDefault}
            />
          </View>
        ))}
      </View>
    </View>
  );
};
