import { Images } from "@/assets/images";
import { Header, ImageWithFallback } from "@/components";
import { Button, Input } from "@/components/ui";
import { SelectCurrencyModal } from "@/components/ui/Modal/SelectCurrencyModal";
import { useGlobalStyles } from "@/hooks";
import { MainTabParamList } from "@/navigation/types";
import { Theme, useTheme } from "@/theme";
import MaterialIcons from "@react-native-vector-icons/material-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
export const Exchange = () => {
  const { theme } = useTheme();
  const globalStyles = useGlobalStyles();
  const styles = createStyles(theme);

  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeField, setActiveField] = useState<"from" | "to">("from");

  const handleSelectCurrency = (code: string) => {
    if (activeField === "from") {
      setFromCurrency(code);
    } else {
      setToCurrency(code);
    }
    setModalVisible(false);
  };

  const isExchangeEnabled =
    fromAmount.trim() !== "" &&
    toAmount.trim() !== "" &&
    fromCurrency &&
    toCurrency;

  const [exchangeRate, setExchangeRate] = useState<number | null>(null);

  useEffect(() => {
    const fetchRate = async () => {
      if (fromCurrency && toCurrency) {
        try {
          const response = await fetch(
            `https://open.er-api.com/v6/latest/${fromCurrency}`,
          );
          const data = await response.json();
          const rate = data?.rates?.[toCurrency];
          if (rate) {
            setExchangeRate(rate);
            if (fromAmount.trim() !== "") {
              const converted = (parseFloat(fromAmount) * rate).toFixed(2);
              setToAmount(converted);
            }
          } else {
            setExchangeRate(null);
            setToAmount("");
          }
        } catch (error) {
          console.error("Failed to fetch exchange rate:", error);
          setExchangeRate(null);
          setToAmount("");
        }
      }
    };

    fetchRate();
  }, [fromCurrency, toCurrency, fromAmount]);

  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();

  return (
    <View style={styles.container}>
      <Header
        title="Exchange"
        onPress={() => navigation.navigate("Search")}
        style={styles.headerContainer}
      />
      <ImageWithFallback source={Images.exchangeRateLogo} style={styles.logo} />
      <View style={styles.exchangeContainer}>
        <Input
          label="From"
          placeholder="Amount"
          value={fromAmount}
          onChangeText={setFromAmount}
          rightText={fromCurrency}
          rightPlaceholder="USD"
          onRightPress={() => {
            setActiveField("from");
            setModalVisible(true);
          }}
          rightIcon={
            <MaterialIcons
              name="unfold-more"
              size={20}
              color={theme.colors.neutral2}
            />
          }
        />

        <View style={styles.arrowContainer}>
          <MaterialIcons name="arrow-downward" size={24} color="red" />
          <MaterialIcons name="arrow-upward" size={24} color="green" />
        </View>

        <View style={styles.bottomContainer}>
          {isExchangeEnabled && exchangeRate ? (
            <View>
              <Input
                label="To"
                placeholder="Amount"
                value={toAmount}
                onChangeText={setToAmount}
                rightText={toCurrency}
                rightPlaceholder="USD"
                onRightPress={() => {
                  setActiveField("to");
                  setModalVisible(true);
                }}
                required={false}
                rightIcon={
                  <MaterialIcons
                    name="unfold-more"
                    size={20}
                    color={theme.colors.neutral2}
                  />
                }
              />
              <View style={styles.currencyContainer}>
                <Text style={[globalStyles.body3, globalStyles.primary1]}>
                  Currency rate
                </Text>
                <Text style={[globalStyles.body3, globalStyles.neutral1]}>
                  1 {fromCurrency} = {exchangeRate} {toCurrency}
                </Text>
              </View>
            </View>
          ) : (
            <Input
              label="To"
              placeholder="Amount"
              value={toAmount}
              onChangeText={setToAmount}
              rightText={toCurrency}
              required={false}
              rightPlaceholder="USD"
              onRightPress={() => {
                setActiveField("to");
                setModalVisible(true);
              }}
              readOnly={true}
              rightIcon={
                <MaterialIcons
                  name="unfold-more"
                  size={20}
                  color={theme.colors.neutral2}
                />
              }
            />
          )}
          <Button title="Exchange" disabled={!isExchangeEnabled} />
        </View>
      </View>

      <SelectCurrencyModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onSelect={handleSelectCurrency}
        selected={activeField === "from" ? fromCurrency : toCurrency}
      />
    </View>
  );
};
const createStyles = (theme: Theme) =>
  StyleSheet.create({
    arrowContainer: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
    },
    bottomContainer: {
      gap: theme.spacing.xl * 2,
    },
    container: {
      flex: 1,
      gap: theme.spacing.lg,
      padding: theme.spacing.md,
    },
    currencyContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: theme.spacing.ms,
    },
    exchangeContainer: {
      backgroundColor: theme.colors.neutral6,
      borderRadius: theme.radius.lg,
      elevation: 4,
      padding: theme.spacing.md,
      shadowColor: theme.colors.primary1,
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.07,
      shadowRadius: theme.radius.lg,
    },
    headerContainer: {
      paddingHorizontal: 0,
    },
    logo: {
      aspectRatio: 2,
      resizeMode: "contain",
      width: "100%",
    },
  });
