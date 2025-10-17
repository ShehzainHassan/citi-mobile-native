import { tabConfig } from '@/config';
import { useTabStyles } from '@/hooks';
import { MainTabParamList } from '@/navigation/types';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Platform, Text, TouchableOpacity, View } from 'react-native';
import { TabKey, TabProps } from './Tabs.types';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const hapticOptions = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const Tab = React.memo(
  ({ tabKey, Icon, isSelected, label, onPress }: TabProps) => {
    const tabStyles = useTabStyles();

    const handlePress = useCallback(() => {
      if (!isSelected) {
        if (Platform.OS !== 'web') {
          ReactNativeHapticFeedback.trigger('impactLight', hapticOptions);
        }
        onPress(tabKey);
      }
    }, [tabKey, isSelected, onPress]);

    return (
      <TouchableOpacity
        onPress={handlePress}
        style={[tabStyles.tab, isSelected && tabStyles.tabSelected]}
        accessibilityRole="tab"
        accessibilityState={{ selected: isSelected }}
        accessibilityLabel={label}
      >
        <Icon selected={isSelected} />
        {isSelected && <Text style={tabStyles.label}>{label}</Text>}
      </TouchableOpacity>
    );
  },
);

Tab.displayName = 'Tab';

export const Tabs = React.memo(() => {
  const tabStyles = useTabStyles();
  const { t } = useTranslation();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const route = useRoute();

  const handleTabPress = useCallback(
    (key: TabKey) => {
      navigation.navigate(key as never);
    },
    [navigation],
  );

  const tabs = useMemo(
    () =>
      tabConfig.map(({ key, icon: Icon, labelKey }) => (
        <Tab
          key={key}
          tabKey={key}
          Icon={Icon}
          isSelected={route.name === key}
          label={t(labelKey)}
          onPress={handleTabPress}
        />
      )),
    [route.name, t, handleTabPress],
  );

  return <View style={tabStyles.container}>{tabs}</View>;
});

Tabs.displayName = 'Tabs';

export default Tabs;
