import { AccountCard, Header } from '@/components';
import { useGlobalStyles } from '@/hooks';
import { View } from 'react-native';
import { managementAccounts } from '@/mocks';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainTabParamList } from '@/navigation/types';

export const Management = () => {
  const globalStyles = useGlobalStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();

  return (
    <View style={globalStyles.verticalSpread}>
      <Header
        title="Management"
        onPress={() => navigation.navigate('SaveOnline')}
      />
      <View style={[globalStyles.paddedColumn, globalStyles.spacedColumn]}>
        {managementAccounts.map((account, index) => (
          <AccountCard
            key={index}
            accountName={account.title}
            accountNumber={account.accNo}
            subText1={account.subText1}
            subText1Value={account.from}
            subText2={account.subText2}
            subText2Value={account.to}
            subText3={account.subText3}
            subText3Value={account.time}
            subText4={account.subText4}
            subText4Value={account.interestRate}
          />
        ))}
      </View>
    </View>
  );
};
