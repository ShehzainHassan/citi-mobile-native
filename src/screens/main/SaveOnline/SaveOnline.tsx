import { Images } from '@/assets/images';
import { Header, SearchScreenCard } from '@/components';
import { useGlobalStyles } from '@/hooks';
import { MainTabParamList } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View } from 'react-native';

export const SaveOnline = () => {
  const globalStyles = useGlobalStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();

  return (
    <View style={globalStyles.verticalSpread}>
      <Header title="Save online" onPress={() => navigation.navigate('Home')} />
      <View style={[globalStyles.paddedColumn, globalStyles.spacedColumn]}>
        <SearchScreenCard
          title="Add"
          subtitle="Add new save online account"
          imageSource={Images.branch}
          onPress={() => navigation.navigate('Add')}
        />
        <SearchScreenCard
          title="Management"
          subtitle="Manage your save online account"
          imageSource={Images.branch}
          onPress={() => navigation.navigate('Management')}
        />
      </View>
    </View>
  );
};
