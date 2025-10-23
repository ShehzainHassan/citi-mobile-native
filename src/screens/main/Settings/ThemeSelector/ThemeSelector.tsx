import { CardDetailRow, CardDetails, Header } from '@/components';
import { useGlobalStyles } from '@/hooks';
import { MainTabParamList } from '@/navigation/types';
import { ThemeMode } from '@/store/slices/theme/themeSlice';
import { useTheme } from '@/styles/ThemeProvider';
import MaterialIcons from '@react-native-vector-icons/material-icons';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View } from 'react-native';

export const ThemeSelector = () => {
  const { themeMode, setThemeMode, theme } = useTheme();
  const globalStyles = useGlobalStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();

  const modes: ThemeMode[] = ['light', 'dark', 'system'];

  return (
    <View style={globalStyles.verticalSpread}>
      <Header title="Theme" onPress={() => navigation.navigate('Settings')} />

      <View style={globalStyles.paddedColumn}>
        <CardDetails>
          {modes.map(mode => (
            <CardDetailRow
              key={mode}
              label={mode.charAt(0).toUpperCase() + mode.slice(1)}
              onPress={() => setThemeMode(mode)}
              value={
                themeMode === mode ? (
                  <MaterialIcons
                    name="check"
                    size={22}
                    color={theme.colors.primary1}
                  />
                ) : (
                  ''
                )
              }
            />
          ))}
        </CardDetails>
      </View>
    </View>
  );
};
