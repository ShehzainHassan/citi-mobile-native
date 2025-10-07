import { CardDetailRow, CardDetails, Header } from "@/components";
import { LANGUAGES } from "@/constants";
import { useStyles } from "@/hooks/useStyles";
import { MainTabParamList } from "@/navigation/types";
import { getFlagUrl } from "@/utils";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export const Language = () => {
  const { globalStyles, theme } = useStyles();
  const [selectedLang, setSelectedLang] = useState("us");
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();

  return (
    <SafeAreaView style={globalStyles.verticalSpread}>
      <Header
        title="Language"
        onPress={() => navigation.navigate("Settings")}
      />
      <ScrollView style={globalStyles.paddedColumn}>
        <CardDetails>
          {LANGUAGES.map((lang) => {
            const isSelected = lang.code === selectedLang;
            return (
              <CardDetailRow
                key={lang.code}
                onPress={() => setSelectedLang(lang.code)}
                label={
                  <View style={styles.rowContainer}>
                    <Image
                      source={{ uri: getFlagUrl(lang.code) }}
                      style={globalStyles.flag}
                      resizeMode="contain"
                    />
                    <Text
                      style={[
                        globalStyles.body1,
                        isSelected
                          ? globalStyles.neutral1
                          : globalStyles.neutral3,
                      ]}
                    >
                      {lang.name}
                    </Text>
                  </View>
                }
                value={
                  isSelected ? (
                    <MaterialIcons
                      name="check"
                      size={22}
                      color={theme.colors.primary1}
                    />
                  ) : (
                    ""
                  )
                }
              />
            );
          })}
        </CardDetails>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  rowContainer: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12,
  },
});
