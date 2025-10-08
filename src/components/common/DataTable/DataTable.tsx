import { useGlobalStyles } from "@/hooks";
import { useTheme } from "@/theme";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { createDataTableStyles } from "./DataTable.styles";
import { DataTableProps } from "./DataTable.types";

export const DataTable: React.FC<DataTableProps> = ({
  columns,
  rows,
  containerStyle,
  headerStyle,
  cellStyle,
  highlightColumnIndex,
  highlightStyle,
}) => {
  const { theme } = useTheme();
  const globalStyles = useGlobalStyles();
  const styles = createDataTableStyles(theme);
  return (
    <View style={[styles.tableContainer, containerStyle]}>
      <View style={styles.headerRow}>
        {columns.map((col, index) => (
          <View
            key={index}
            style={[
              styles.cellWrapper,
              index === 0 ? styles.flex2 : styles.flex1,
              index !== 0 && styles.centerAlign,
            ]}
          >
            <Text
              style={[globalStyles.title3, globalStyles.neutral3, headerStyle]}
            >
              {col}
            </Text>
          </View>
        ))}
      </View>

      <ScrollView
        style={styles.scrollContainer}
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        {rows.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.dataRow}>
            {row.map((cell, cellIndex) => (
              <View
                key={cellIndex}
                style={[
                  styles.cellWrapper,
                  cellIndex === 0 ? styles.flex2 : styles.flex1,
                  cellIndex !== 0 && styles.centerAlign,
                ]}
              >
                {typeof cell === "string" || typeof cell === "number" ? (
                  <Text
                    style={[
                      globalStyles.body1,
                      globalStyles.neutral1,
                      cellStyle,
                      highlightColumnIndex === cellIndex && highlightStyle,
                    ]}
                  >
                    {cell}
                  </Text>
                ) : (
                  cell
                )}
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
