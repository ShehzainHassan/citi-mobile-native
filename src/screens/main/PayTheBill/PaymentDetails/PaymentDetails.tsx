import { BaseModal, Button, Header, Input } from '@/components';
import { useGlobalStyles } from '@/hooks';
import { companies } from '@/mocks';
import { MainTabParamList } from '@/navigation/types';
import { useTheme } from '@/theme';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export const PaymentDetails = () => {
  const globalStyles = useGlobalStyles();
  const { theme } = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [billCode, setBillCode] = useState('');
  return (
    <View style={globalStyles.verticalSpread}>
      <Header title="Pay the bill" onPress={() => navigation.goBack()} />
      <View style={globalStyles.paddedColumn}>
        <View
          style={[globalStyles.cardContainer, globalStyles.largeSpacedColumn]}
        >
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
          <Input
            value={billCode}
            onChangeText={setBillCode}
            label="Type internet bill code"
            placeholder="Bill code"
            keyboardType="number-pad"
          />
          <Text style={[globalStyles.body3, globalStyles.textDefault]}>
            Please enter the correct bill code to check information
          </Text>
          <Button
            title="Check"
            disabled={!selectedCompany || !billCode}
            onPress={() => navigation.navigate('BillDetails')}
          />
        </View>
      </View>
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
    </View>
  );
};
