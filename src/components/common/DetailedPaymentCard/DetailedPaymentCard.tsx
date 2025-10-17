import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '@/theme';
import { useGlobalStyles } from '@/hooks';
import { createDetailedPaymentCardStyles } from './DetailedPaymentCard.styles';
import { DetailedPaymentCardProps } from './DetailedPaymentCard.types';

export const DetailedPaymentCard = ({
  title,
  paymentData,
}: DetailedPaymentCardProps) => {
  const { theme } = useTheme();
  const globalStyles = useGlobalStyles();
  const cardStyles = createDetailedPaymentCardStyles(theme);

  const renderRow = (label: string, value: string | number) => (
    <View style={[globalStyles.rowWrap]}>
      <Text style={[globalStyles.caption1, globalStyles.textDefault]}>
        {label}
      </Text>
      <Text style={[globalStyles.caption1, globalStyles.neutral1]}>
        {value}
      </Text>
    </View>
  );

  if (!paymentData) return null;
  const {
    name,
    address,
    phoneNo,
    code,
    from,
    to,
    feeLabel,
    feeAmount,
    tax,
    total,
  } = paymentData;

  return (
    <View style={[globalStyles.cardContainer]}>
      {title && (
        <Text
          style={[
            globalStyles.mediumSpacedContainer,
            globalStyles.title3,
            globalStyles.neutral1,
          ]}
        >
          {title}
        </Text>
      )}
      {renderRow('Name', name)}
      {renderRow('Address', address)}
      {renderRow('Phone number', phoneNo)}
      {renderRow('Code', code)}
      {renderRow('From', from)}
      {renderRow('To', to)}

      <View style={[globalStyles.rowWrap]}>
        <Text style={[globalStyles.body1, globalStyles.textDefault]}>
          {feeLabel}
        </Text>
        <Text style={[globalStyles.title3]}>{feeAmount}</Text>
      </View>

      <View style={[globalStyles.rowWrap, cardStyles.dottedBorder]}>
        <Text style={[globalStyles.body1, globalStyles.textDefault]}>Tax</Text>
        <Text style={[globalStyles.title3]}>{tax}</Text>
      </View>

      <View style={[globalStyles.rowWrap]}>
        <Text style={[globalStyles.title3, globalStyles.neutral1]}>TOTAL</Text>
        <Text style={[globalStyles.title1, globalStyles.semantic1]}>
          {total}
        </Text>
      </View>
    </View>
  );
};
