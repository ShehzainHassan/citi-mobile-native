import { Header, Tabs } from "@/components";
import { useStyles } from "@/hooks/useStyles";
import { MainTabParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View } from "react-native";

export const Messages = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const { globalStyles } = useStyles();
  return (
    <View style={[globalStyles.verticalSpread]}>
      <Header title="Messages" onPress={() => navigation.navigate("Home")} />
      <Tabs />
    </View>
  );
};
