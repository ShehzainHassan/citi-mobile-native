import { Button, Header, Input, Message } from '@/components';
import { useGlobalStyles } from '@/hooks';
import { MainTabParamList } from '@/navigation/types';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StyleSheet, View } from 'react-native';

export const MessageDetails = () => {
  const globalStyles = useGlobalStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const route = useRoute<RouteProp<MainTabParamList, 'MessagesDetails'>>();
  const { headerText } = route.params;

  return (
    <View style={globalStyles.verticalSpread}>
      <Header
        title={headerText}
        onPress={() => navigation.navigate('Messages')}
      />
      <View style={[globalStyles.paddedColumn, globalStyles.spacedColumn]}>
        <Message messageType="sender" />
        <Message messageType="receiver" />
      </View>
      <View style={styles.inputRow}>
        <View style={styles.input}>
          <Input placeholder="Type something" />
        </View>
        <Button title="Send" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
  },

  inputRow: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    gap: 16,
    padding: 24,
  },
});
