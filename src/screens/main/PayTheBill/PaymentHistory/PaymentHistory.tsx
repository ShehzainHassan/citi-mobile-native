import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Header, PaymentHistoryCard } from '@/components';
import { useGlobalStyles } from '@/hooks';
import { electricBillData, internetBillData } from '@/mocks/paymentHistory';
import { MainTabWithSearchParamList } from '@/navigation/types';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const PaymentHistory = () => {
  const globalStyles = useGlobalStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabWithSearchParamList>>();
  const route = useRoute();
  const initialType =
    (
      route.params as {
        selectedType?: 'Electric' | 'Water' | 'Mobile' | 'Internet';
      }
    )?.selectedType ?? 'Electric';

  const [selectedType, setSelectedType] =
    useState<typeof initialType>(initialType);

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
            company={
              selectedType === 'Internet'
                ? (item as (typeof internetBillData)[number]).company
                : undefined
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
    maxHeight: 45,
    height: '100%',
  },
  button: {
    minWidth: 100,
    borderRadius: 15,
  },
});
