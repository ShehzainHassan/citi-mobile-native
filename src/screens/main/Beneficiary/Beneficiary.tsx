import { CardHolderInfo, Header } from '@/components';
import { useGlobalStyles } from '@/hooks';
import { cardInfos } from '@/mocks';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from '@/theme';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainTabParamList } from '@/navigation/types';

export const Beneficiary = () => {
  const globalStyles = useGlobalStyles();
  const { theme } = useTheme();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();

  return (
    <View style={globalStyles.verticalSpread}>
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
        <MaterialIcons name="add" size={40} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  section: {
    gap: 12,
    marginBottom: 24,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
});
