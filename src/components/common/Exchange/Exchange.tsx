import { Images } from "@/assets/images";
import { Button, Input } from "@/components/ui";
import { SelectCurrencyModal } from "@/components/ui/Modal/SelectCurrencyModal";
import { useStyles } from "@/hooks/useStyles";
import { useTheme } from "@/theme";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import UnfoldMoreIcon from "@mui/icons-material/UnfoldMore";
import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { createExchangeStyles } from "./Exchange.styles";

export const Exchange = () => {
  const { theme } = useTheme();
  const { globalStyles } = useStyles();
  const styles = createExchangeStyles(theme);
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
            `https://open.er-api.com/v6/latest/${fromCurrency}`
          );
          const data = await response.json();
          const rate = data?.rates?.[toCurrency];
          if (rate) {
            setExchangeRate(rate);
          } else {
            setExchangeRate(null);
          }
        } catch (error) {
          console.error("Failed to fetch exchange rate:", error);
          setExchangeRate(null);
        }
      }
    };

    fetchRate();
  }, [fromCurrency, toCurrency]);

  return (
    <View style={[globalStyles.paddedColumn]}>
      <Image source={Images.exchangeRateLogo} style={[styles.logo]} />

      <View style={[styles.exchangeContainer]}>
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
          rightIcon={<UnfoldMoreIcon sx={{ color: theme.colors.neutral2 }} />}
        />

        <View style={[styles.arrowContainer]}>
          <ArrowDownwardIcon sx={{ color: "red", width: 24, height: 24 }} />
          <ArrowUpwardIcon sx={{ color: "green", width: 24, height: 24 }} />
        </View>

        <View style={[styles.bottomContainer]}>
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
                rightIcon={
                  <UnfoldMoreIcon sx={{ color: theme.colors.neutral2 }} />
                }
              />
              <View style={[styles.currencyContainer]}>
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
              rightPlaceholder="USD"
              onRightPress={() => {
                setActiveField("to");
                setModalVisible(true);
              }}
              rightIcon={
                <UnfoldMoreIcon sx={{ color: theme.colors.neutral2 }} />
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
