import { DataTable, Header } from "@/components";
import { INTEREST_RATE_TABLE } from "@/constants";
import { useStyles } from "@/hooks/useStyles";
import { MainTabParamList } from "@/navigation/types";
import { useTheme } from "@/theme";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View } from "react-native";

export const InterestRate = () => {
  const { theme } = useTheme();
  const { globalStyles } = useStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  return (
    <View style={[globalStyles.verticalSpread]}>
      <Header
        title="Interest rate"
        onPress={() => navigation.navigate("Search")}
      />
      <DataTable
        columns={INTEREST_RATE_TABLE.columns}
        rows={INTEREST_RATE_TABLE.rows}
        highlightColumnIndex={2}
        highlightStyle={{ color: theme.colors.primary1 }}
      />
    </View>
  );
};
