import { BaseModal, Button, Header, Input } from '@/components';
import { useGlobalStyles } from '@/hooks';
import {
  companies,
  electricPayment,
  internetPayment,
  mobilePayment,
  waterPayment,
} from '@/mocks';
import { MainTabParamList } from '@/navigation/types';
import { useTheme } from '@/theme';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { RouteProp, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const PaymentDetails = () => {
  const globalStyles = useGlobalStyles();
  const { theme } = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const { params } = useRoute<RouteProp<MainTabParamList, 'PaymentDetails'>>();
  const billType = params?.billType;

  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [billCode, setBillCode] = useState('');

  const isInternet = billType === 'Internet';
  const label = `Type ${billType.toLowerCase()} bill code`;

  const isCheckDisabled = isInternet
    ? !selectedCompany || !billCode
    : !billCode;

  const paymentMap = {
    Electric: electricPayment[0],
    Water: waterPayment[0],
    Mobile: mobilePayment[0],
    Internet: internetPayment[0],
  };

  return (
    <SafeAreaView style={globalStyles.verticalSpread} edges={['top']}>
      <Header title="Pay the bill" onPress={() => navigation.goBack()} />
      <View style={globalStyles.paddedColumn}>
        <View
          style={[globalStyles.cardContainer, globalStyles.largeSpacedColumn]}
        >
          {isInternet && (
            <TouchableOpacity onPress={() => setModalOpen(true)}>
              <Input
                value={selectedCompany}
                onPress={() => setModalOpen(true)}
                readOnly={true}
                placeholder="Choose company"
                rightIcon={
                  <MaterialIcons
                    name="expand-more"
                    size={24}
                    color={theme.colors.neutral4}
                  />
                }
                showRightBorder={false}
              />
            </TouchableOpacity>
          )}

          <Input
            value={billCode}
            onChangeText={setBillCode}
            label={label}
            placeholder="Bill code"
            keyboardType="number-pad"
          />

          <Text style={[globalStyles.body3, globalStyles.textDefault]}>
            Please enter the correct bill code to check information
          </Text>

          <Button
            title="Check"
            disabled={isCheckDisabled}
            onPress={() =>
              navigation.navigate('BillDetails', {
                billType,
                paymentData: paymentMap[billType],
              })
            }
          />
        </View>
      </View>

      {isInternet && (
        <BaseModal
          visible={isModalOpen}
          onClose={() => setModalOpen(false)}
          header="Choose company"
          contents={companies}
          selectedItem={selectedCompany}
          onSelect={company => {
            setSelectedCompany(company);
            setModalOpen(false);
          }}
          alignCenter
        />
      )}
    </SafeAreaView>
  );
};
