import { Images } from '@/assets/images';
import {
  CardDetails,
  Header,
  ImageWithFallback,
  SettingsRow,
  Tabs,
} from '@/components';
import { useAuthStyles, useGlobalStyles } from '@/hooks';
import { MainTabWithAuthAndSettingsParamList } from '@/navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';

export const Settings = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<MainTabWithAuthAndSettingsParamList>
    >();
  const globalStyles = useGlobalStyles();
  const authStyles = useAuthStyles();

  const settingsOptions = [
    {
      id: 'password',
      label: 'Password',
      onPress: () =>
        navigation.navigate('ChangePassword', { from: 'Settings' }),
    },
    {
      id: 'touchId',
      label: 'Touch ID',
    },
    {
      id: 'languages',
      label: 'Languages',
      onPress: () => navigation.navigate('Language'),
    },
    {
      id: 'appInfo',
      label: 'App information',
      onPress: () => navigation.navigate('AppInformation'),
    },
    {
      id: 'customerCare',
      label: 'Customer care',
    },
    {
      id: 'theme',
      label: 'Theme',
      onPress: () => navigation.navigate('ThemeSelector'),
    },
  ];

  return (
    <View style={authStyles.container}>
      <Header
        title="Settings"
        variant="secondary"
        onPress={() => navigation.navigate('Home')}
        style={authStyles.headerContainer}
      />

      <View style={[globalStyles.roundedContainer]}>
        <View style={styles.imgWrapper}>
          <ImageWithFallback
            source={Images.profilePic}
            style={styles.profilePic}
          />
          <Text style={styles.nameText}>John Smith</Text>
        </View>
        <CardDetails>
          {settingsOptions.map(option => (
            <SettingsRow
              key={option.id}
              label={option.label}
              onPress={option.onPress ?? (() => {})}
            />
          ))}
        </CardDetails>
      </View>

      <Tabs />
    </View>
  );
};
const styles = StyleSheet.create({
  imgWrapper: {
    position: 'relative',
    alignItems: 'center',
    width: '100%',
    top: -80,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center',
  },
  profilePic: {
    width: 100,
    height: 100,
  },
});

export default Settings;
