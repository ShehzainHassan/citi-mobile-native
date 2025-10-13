import { Button, Header, PaymentHistoryCard } from '@/components';
import { useGlobalStyles } from '@/hooks';
import {
  electricBillData,
  electricPayment,
  internetBillData,
  internetPayment,
  mobilePayment,
  waterPayment,
} from '@/mocks/paymentHistory';
import { MainTabWithSearchParamList } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export const PaymentHistory = () => {
  const globalStyles = useGlobalStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabWithSearchParamList>>();

  const [selectedType, setSelectedType] = useState('Electric');
  const billData =
    selectedType === 'Internet' ? internetBillData : electricBillData;

  return (
    <View style={globalStyles.verticalSpread}>
      <Header
        title="Payment history"
        onPress={() => navigation.navigate('PayBill')}
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.buttonRow}
      >
        {['Electric', 'Water', 'Mobile', 'Internet'].map(type => (
          <Button
            key={type}
            title={type}
            style={styles.button}
            variant={selectedType === type ? 'primary' : 'secondary'}
            onPress={() => setSelectedType(type as typeof selectedType)}
          />
        ))}
      </ScrollView>

      <ScrollView
        contentContainerStyle={[
          globalStyles.paddedContainer,
          globalStyles.spacedColumn,
        ]}
        showsVerticalScrollIndicator={false}
      >
        {billData.map((item, index) => (
          <PaymentHistoryCard
            key={index}
            title={item.title}
            date={item.date}
            status={item.status}
            amount={item.amount}
            company={item.company}
            onPress={() =>
              navigation.navigate('DetailedPaymentCard', {
                headerText: `${selectedType} payment`,
                paymentData:
                  selectedType === 'Electric'
                    ? electricPayment[0]
                    : selectedType === 'Water'
                    ? waterPayment[0]
                    : selectedType === 'Mobile'
                    ? mobilePayment[0]
                    : internetPayment[0],
              })
            }
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonRow: {
    flexDirection: 'row',
    marginHorizontal: 24,
    marginVertical: 16,
    gap: 12,
    height: 50,
  },
  button: {
    minWidth: 100,
    borderRadius: 15,
    height: 45,
  },
});
