import { Header, InfoRowCard, Tabs } from '@/components';
import { MESSAGES_CARD_CONFIG } from '@/config';
import { useGlobalStyles } from '@/hooks';
import { MainTabParamList } from '@/navigation/types';
import { useTheme } from '@/theme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const Messages = () => {
  const globalStyles = useGlobalStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const { theme } = useTheme();

  const handleNavigate = (headerText: string) => {
    navigation.navigate('MessagesDetails', { headerText });
  };

  return (
    <SafeAreaView
      style={[globalStyles.safeArea, globalStyles.verticalSpread]}
      edges={['top', 'bottom']}
    >
      <Header title="Messages" onPress={() => navigation.navigate('Home')} />
      <View style={[globalStyles.paddedColumn, globalStyles.spacedColumn]}>
        {MESSAGES_CARD_CONFIG.map(card => (
          <InfoRowCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            subtitle={card.subtitle}
            amount={card.amount}
            onPress={() => handleNavigate(card.route)}
            iconBackgroundColor={theme.colors[card.iconColorKey]}
            amountStyle={[globalStyles.caption2, globalStyles.neutral3]}
            style={[globalStyles.cardContainer, styles.cardContainer]}
            noBorder
          />
        ))}
      </View>
      <Tabs />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingBottom: 0,
  },
});
