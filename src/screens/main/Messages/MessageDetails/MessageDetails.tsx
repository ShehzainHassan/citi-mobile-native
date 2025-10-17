import { Button, Header, Input, Message } from '@/components';
import { useGlobalStyles } from '@/hooks';
import { MainTabParamList } from '@/navigation/types';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View } from 'react-native';

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
        <Message
          messageType="sender"
          message="Did you attempt transaction on debit card ending in 0000 at Mechan1 inNJ for $1,200? Reply YES or NO"
        />
        <Message messageType="receiver" message="YES" />
      </View>
      <View style={globalStyles.inputRow}>
        <View style={globalStyles.fillAll}>
          <Input placeholder="Type something" />
        </View>
        <Button title="Send" />
      </View>
    </View>
  );
};
