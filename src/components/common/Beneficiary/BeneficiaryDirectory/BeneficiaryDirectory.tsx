import { Beneficiary } from '@/components';
import { useGlobalStyles } from '@/hooks';
import { beneficiaryData } from '@/mocks';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BeneficiaryDirectoryProps } from './BeneficiaryDirectory.types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainTabParamList } from '@/navigation/types';

export const BeneficiaryDirectory: React.FC<BeneficiaryDirectoryProps> = ({
  title = 'Directory',
  subtitle = 'Find beneficiary',
  selectedBeneficiary,
  onSelect,
}) => {
  const globalStyles = useGlobalStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();

  return (
    <>
      <View style={globalStyles.amountContainer}>
        <Text style={[globalStyles.caption1, globalStyles.neutral3]}>
          {title}
        </Text>
        <Text style={[globalStyles.caption1]}>{subtitle}</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
        contentContainerStyle={styles.container}
      >
        <Beneficiary
          isNew={true}
          onPress={() => navigation.navigate('AddBeneficiary')}
        />

        {beneficiaryData.map((item, index) => (
          <Beneficiary
            key={item.id || index}
            isNew={false}
            image={item.image}
            name={item.name}
            onPress={() => onSelect(item.name)}
            selected={selectedBeneficiary === item.name}
          />
        ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scroll: {
    maxHeight: 120,
    marginBottom: 32,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
});
