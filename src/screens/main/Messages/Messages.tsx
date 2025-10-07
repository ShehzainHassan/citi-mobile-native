import { Header, Tabs } from "@/components";
import { MainTabParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View } from "react-native";

export const Messages = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        justifyContent: "space-between",
      }}
    >
      <Header title="Messages" onPress={() => navigation.navigate("Home")} />
      <Tabs />
    </View>
  );
};
