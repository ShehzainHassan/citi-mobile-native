import { Beneficiary } from '@/components';
import { useGlobalStyles } from '@/hooks';
import { beneficiaryData } from '@/mocks';
import { MainTabParamList } from '@/navigation/types';
import { useTheme } from '@/theme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { createBeneficiaryDirectoryStyles } from './BeneficiaryDirectory.styles';
import { BeneficiaryDirectoryProps } from './BeneficiaryDirectory.types';

export const BeneficiaryDirectory: React.FC<BeneficiaryDirectoryProps> = ({
  title = 'Directory',
  subtitle = 'Find beneficiary',
  selectedBeneficiary,
  onSelect,
}) => {
  const { theme } = useTheme();
  const globalStyles = useGlobalStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const styles = createBeneficiaryDirectoryStyles(theme);
  return (
    <View style={styles.beneficiaryContainer}>
      <View style={globalStyles.rowWrap}>
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
    </View>
  );
};
