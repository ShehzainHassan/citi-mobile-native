import { Images } from '@/assets/images';
import { Header, InfoRowCard, Tabs } from '@/components';
import { useGlobalStyles } from '@/hooks';
import { MainTabParamList } from '@/navigation/types';
import { useTheme } from '@/theme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';

export const Messages = () => {
  const globalStyles = useGlobalStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();

  const handleNavigate = (headerText: string) => {
    navigation.navigate('MessagesDetails', { headerText });
  };
  const { theme } = useTheme();
  return (
    <View style={styles.container}>
      <Header title="Messages" onPress={() => navigation.navigate('Home')} />
      <View style={[globalStyles.paddedColumn, globalStyles.spacedColumn]}>
        <InfoRowCard
          icon={Images.citiBank}
          title="Citibank"
          amount="Today"
          subtitle="Citibank: 256486 is the authorization"
          amountStyle={[globalStyles.caption2, globalStyles.neutral3]}
          style={styles.cardContainer}
          onPress={() => handleNavigate('Citibank')}
          iconBackgroundColor={theme.colors.primary1}
        />
        <InfoRowCard
          icon={Images.account}
          title="Account"
          amount="12/10"
          subtitle="Your account is limited. Please follow"
          amountStyle={[globalStyles.caption2, globalStyles.neutral3]}
          style={styles.cardContainer}
          onPress={() => handleNavigate('Account')}
          iconBackgroundColor={theme.colors.semantic1}
        />
        <InfoRowCard
          icon={Images.alert}
          title="Alert"
          amount="11/10"
          subtitle="Your statement is ready for you to"
          amountStyle={[globalStyles.caption2, globalStyles.neutral3]}
          style={styles.cardContainer}
          onPress={() => handleNavigate('Alert')}
          iconBackgroundColor={theme.colors.semantic2}
        />
        <InfoRowCard
          icon={Images.paypal}
          title="Paypal"
          amount="10/11"
          subtitle="Your account has been locked. Please"
          amountStyle={[globalStyles.caption2, globalStyles.neutral3]}
          style={styles.cardContainer}
          onPress={() => handleNavigate('Paypal')}
          iconBackgroundColor={theme.colors.semantic3}
        />
        <InfoRowCard
          icon={Images.withdrawIcon}
          title="Withdraw"
          amount="10/12"
          subtitle="Dear customer, 2987456 is your code"
          amountStyle={[globalStyles.caption2, globalStyles.neutral3]}
          style={styles.cardContainer}
          onPress={() => handleNavigate('Withdraw')}
          iconBackgroundColor={theme.colors.semantic4}
        />
      </View>
      <Tabs />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 0,
    borderRadius: 15,
    paddingBottom: 0,
    padding: 12,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
