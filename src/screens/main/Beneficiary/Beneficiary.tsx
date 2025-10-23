import { CardHolderInfo, Header } from '@/components';
import { useBeneficiaryStyles, useGlobalStyles } from '@/hooks';
import { cardInfos } from '@/mocks';
import { MainTabParamList } from '@/navigation/types';
import { useTheme } from '@/theme';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Beneficiary = () => {
  const globalStyles = useGlobalStyles();
  const { theme } = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const styles = useBeneficiaryStyles();
  return (
    <SafeAreaView style={globalStyles.verticalSpread} edges={['top', 'bottom']}>
      <Header
        title="Beneficiary"
        rightIcon={<MaterialIcons name="search" size={24} />}
      />
      <ScrollView style={styles.container}>
        <View style={styles.section}>
          <Text style={[globalStyles.caption1, globalStyles.textDefault]}>
            Transfer via card number
          </Text>
          <CardHolderInfo data={cardInfos} />
        </View>

        <View style={styles.section}>
          <Text style={[globalStyles.caption1, globalStyles.textDefault]}>
            Transfer to the same bank
          </Text>
          <CardHolderInfo data={cardInfos} />
        </View>

        <View style={styles.section}>
          <Text style={[globalStyles.caption1, globalStyles.textDefault]}>
            Transfer to another bank
          </Text>
          <CardHolderInfo data={cardInfos} />
        </View>
      </ScrollView>

      <TouchableOpacity
        style={[styles.fab, { backgroundColor: theme.colors.primary1 }]}
        onPress={() => navigation.navigate('AddBeneficiary')}
      >
        <MaterialIcons name="add" size={40} color={theme.colors.neutral6} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
