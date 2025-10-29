import { Images } from '@/assets/images';
import {
  CardDetails,
  CurrencyModal,
  Header,
  OptimizedImage,
  SettingsRow,
  Tabs,
} from '@/components';
import { SETTINGS_OPTIONS } from '@/config';
import {
  useAuthStyles,
  useDisableBiometricMutation,
  useEnableBiometricMutation,
  useGlobalStyles,
} from '@/hooks';
import { MainTabWithAuthAndSettingsParamList } from '@/navigation/types';
import { RootState } from '@/store';
import { setCurrency } from '@/store/slices/settings/settingsSlice';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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
  const { mutateAsync: enableBiometric } = useEnableBiometricMutation();
  const { mutateAsync: disableBiometric } = useDisableBiometricMutation();

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

  const handleBiometricToggle = async (enabled: boolean) => {
    if (enabled) {
      await enableBiometric();
    } else {
      await disableBiometric();
    }
  };

  return (
    <SafeAreaView style={globalStyles.safeArea} edges={['top', 'bottom']}>
      <ScrollView>
        <Header
          title="Settings"
          variant="secondary"
          onPress={() => navigation.navigate('Home')}
          style={authStyles.headerContainer}
        />

        <View style={[globalStyles.roundedContainer, globalStyles.fillAll]}>
          <View style={[globalStyles.imgWrapper]}>
            <OptimizedImage
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
                onPress={
                  option.id !== 'touchId'
                    ? () =>
                        handleOptionPress(option.id, option.route, option.type)
                    : undefined
                }
                showChevron={option.id !== 'touchId'}
                showToggle={option.id === 'touchId'}
                initialToggleValue={false}
                onToggleChange={handleBiometricToggle}
              />
            ))}
          </CardDetails>
        </View>

        <CurrencyModal
          visible={isModalVisible}
          onClose={() => setModalVisible(false)}
          selectedCurrency={selectedCurrency}
          onSelect={handleSelectCurrency}
        />
      </ScrollView>
      <Tabs />
    </SafeAreaView>
  );
};

export default Settings;
