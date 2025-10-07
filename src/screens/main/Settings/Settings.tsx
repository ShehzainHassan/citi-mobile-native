import { Images } from "@/assets/images";
import { CardDetails, Header, SettingsRow, Tabs } from "@/components";
import { useStyles } from "@/hooks/useStyles";
import { MainTabWithAuthAndSettingsParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, StyleSheet, Text, View } from "react-native";

export const Settings = () => {
  const navigation =
    useNavigation<
      NativeStackNavigationProp<MainTabWithAuthAndSettingsParamList>
    >();
  const { globalStyles, authStyles, homeScreenStyles } = useStyles();

  const settingsOptions = [
    {
      id: "password",
      label: "Password",
      onPress: () =>
        navigation.navigate("ChangePassword", { from: "Settings" }),
    },
    {
      id: "touchId",
      label: "Touch ID",
    },
    {
      id: "languages",
      label: "Languages",
      onPress: () => navigation.navigate("Language"),
    },
    {
      id: "appInfo",
      label: "App information",
      onPress: () => navigation.navigate("AppInformation"),
    },
    {
      id: "customerCare",
      label: "Customer care",
    },
  ];

  return (
    <View style={authStyles.container}>
      <Header
        title="Settings"
        variant="secondary"
        onPress={() => navigation.navigate("Home")}
        style={authStyles.headerContainer}
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
          {settingsOptions.map((option) => (
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
    alignItems: "center",
    justifyContent: "flex-start",
  },
  nameText: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
  },
  profilePic: {
    height: 100,
    position: "absolute",
    top: -100,
    width: 100,
  },
  roundedContainer: {
    paddingTop: 50,
    position: "relative",
  },
});

export default Settings;
