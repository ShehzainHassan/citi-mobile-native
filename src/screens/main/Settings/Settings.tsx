import { Images } from '@/assets/images';
import {
  CardDetails,
  CurrencyModal,
  Header,
  ImageWithFallback,
  SettingsRow,
  Tabs,
} from '@/components';
import { SETTINGS_OPTIONS } from '@/config';
import { useAuthStyles, useGlobalStyles } from '@/hooks';
import { MainTabWithAuthAndSettingsParamList } from '@/navigation/types';
import { RootState } from '@/store';
import { setCurrency } from '@/store/slices/settings/settingsSlice';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

export const Settings = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<MainTabWithAuthAndSettingsParamList>
    >();

  const globalStyles = useGlobalStyles();
  const authStyles = useAuthStyles();
  const dispatch = useDispatch();

  const selectedCurrency = useSelector(
    (state: RootState) => state.settings.currency,
  );

  const [isModalVisible, setModalVisible] = React.useState(false);

  const handleSelectCurrency = React.useCallback(
    (label: string) => {
      const code = label.split(' ')[0] || 'USD';
      dispatch(setCurrency(code));
      setModalVisible(false);
    },
    [dispatch],
  );

  const handleOptionPress = (id?: string, route?: string, type?: string) => {
    if (id === 'currency' || type === 'currency') {
      setModalVisible(true);
    } else if (route) {
      navigation.navigate(route as never);
    }
  };

  return (
    <ScrollView style={authStyles.container}>
      <Header
        title="Settings"
        variant="secondary"
        onPress={() => navigation.navigate('Home')}
        style={authStyles.headerContainer}
      />

      <View style={[globalStyles.roundedContainer]}>
        <View style={[globalStyles.imgWrapper]}>
          <ImageWithFallback
            source={Images.profilePic}
            style={globalStyles.profilePic}
          />
          <Text style={[globalStyles.title3]}>John Smith</Text>
        </View>

        <CardDetails>
          {SETTINGS_OPTIONS.map(option => (
            <SettingsRow
              key={option.id}
              label={
                option.id === 'currency'
                  ? `Change Currency (${selectedCurrency})`
                  : option.labelKey
              }
              onPress={() =>
                handleOptionPress(option.id, option.route, option.type)
              }
            />
          ))}
        </CardDetails>
      </View>

      <Tabs />

      <CurrencyModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        selectedCurrency={selectedCurrency}
        onSelect={handleSelectCurrency}
      />
    </ScrollView>
  );
};

export default Settings;
