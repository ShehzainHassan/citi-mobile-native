import { Images } from "@/assets/images";
import { CardDetailRow, CardDetails, Header, Tabs } from "@/components";
import { useStyles } from "@/hooks/useStyles";
import { MainTabWithAuthAndSettingsParamList } from "@/navigation/types";
import { useTheme } from "@/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, StyleSheet, Text, View } from "react-native";

export const Settings = () => {
  const { theme } = useTheme();
  const navigation =
    useNavigation<
      NativeStackNavigationProp<MainTabWithAuthAndSettingsParamList>
    >();
  const { globalStyles, authStyles, homeScreenStyles } = useStyles();

  return (
    <View style={[authStyles.container]}>
      <Header
        title="Settings"
        variant="secondary"
        onPress={() => navigation.navigate("Home")}
        style={[authStyles.headerContainer]}
      />

      <View style={[globalStyles.roundedContainer, styles.roundedContainer]}>
        <View style={styles.imgWrapper}>
          <Image
            source={Images.profilePic}
            style={[homeScreenStyles.profilePic, styles.profilePic]}
          />
          <Text style={styles.nameText}>John Smith</Text>
        </View>
        <CardDetails>
          <CardDetailRow
            label="Password"
            labelStyle={globalStyles.neutral1}
            value={
              <MaterialIcons
                name="chevron-right"
                size={24}
                color={theme.colors.neutral5}
              />
            }
            onPress={() =>
              navigation.navigate("ChangePassword", {
                from: "Settings",
              })
            }
          />
          <CardDetailRow
            label="Touch ID"
            labelStyle={globalStyles.neutral1}
            value={
              <MaterialIcons
                name="chevron-right"
                size={24}
                color={theme.colors.neutral5}
              />
            }
          />
          <CardDetailRow
            label="Languages"
            labelStyle={globalStyles.neutral1}
            value={
              <MaterialIcons
                name="chevron-right"
                size={24}
                color={theme.colors.neutral5}
              />
            }
            onPress={() => navigation.navigate("Language")}
          />
          <CardDetailRow
            label="App information"
            labelStyle={globalStyles.neutral1}
            value={
              <MaterialIcons
                name="chevron-right"
                size={24}
                color={theme.colors.neutral5}
              />
            }
            onPress={() => navigation.navigate("AppInformation")}
          />
          <CardDetailRow
            label="Customer care"
            labelStyle={globalStyles.neutral1}
            value={
              <MaterialIcons
                name="chevron-right"
                size={24}
                color={theme.colors.neutral5}
              />
            }
          />
        </CardDetails>
      </View>
      <Tabs />
    </View>
  );
};

const styles = StyleSheet.create({
  roundedContainer: {
    position: "relative",
    paddingTop: 50,
  },
  imgWrapper: {
    alignItems: "center",
    justifyContent: "flex-start",
  },
  profilePic: {
    position: "absolute",
    top: -100,
    width: 100,
    height: 100,
  },
  nameText: {
    marginTop: 15,
    fontSize: 18,
    fontWeight: "bold",
  },
});
