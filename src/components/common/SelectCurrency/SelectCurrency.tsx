import { useTheme } from "@/theme";
import currencyCodes from "currency-codes";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { createSelectCurrencyStyles } from "./SelectCurrency.styles";
import {
  Currency,
  SelectCurrencyHeaderProps,
  SelectCurrencyListProps,
} from "./SelectCurrency.types";
import MaterialIcons from "@react-native-vector-icons/material-icons";

const currencies: Currency[] = currencyCodes
  .codes()
  .map((code) => currencyCodes.code(code))
  .filter((currency): currency is NonNullable<typeof currency> => !!currency)
  .map((currency) => ({
    code: currency.code,
    name: currency.currency,
  }));

export const SelectCurrencyHeader: React.FC<SelectCurrencyHeaderProps> = ({
  onClose,
}) => {
  const { theme } = useTheme();
  const styles = createSelectCurrencyStyles(theme);

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Select the currency</Text>
      <TouchableOpacity onPress={onClose}>
        <MaterialIcons name="close" size={20} color="#666" />
      </TouchableOpacity>
    </View>
  );
};

export const SelectCurrencyList: React.FC<SelectCurrencyListProps> = ({
  selected,
  onSelect,
  onClose,
}) => {
  const { theme } = useTheme();
  const styles = createSelectCurrencyStyles(theme);

  return (
    <FlatList
      data={currencies}
      keyExtractor={(item) => item.code}
      renderItem={({ item }) => {
        const isSelected = item.code === selected;
        return (
          <TouchableOpacity
            style={styles.row}
            onPress={() => {
              onSelect(item.code);
              onClose();
            }}>
            <Text style={[styles.text, isSelected && styles.selectedText]}>
              {item.code} ({item.name})
            </Text>
            {isSelected && (
              <MaterialIcons
                name="check"
                size={18}
                color={theme.colors.primary1}
              />
            )}
          </TouchableOpacity>
        );
      }}
    />
  );
};
