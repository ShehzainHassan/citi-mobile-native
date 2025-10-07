import { SelectCurrencyHeader, SelectCurrencyList } from "@/components/common";
import { useTheme } from "@/theme";
import React from "react";
import {
  Dimensions,
  Modal,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { createSelectCurrencyModalStyles } from "./SelectCurrencyModal.styles";
import { SelectCurrencyModalProps } from "./SelectCurrencyModal.types";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");
const modalHeight = screenHeight * 0.33;

export const SelectCurrencyModal: React.FC<SelectCurrencyModalProps> = ({
  visible,
  onClose,
  onSelect,
  selected,
}) => {
  const { theme } = useTheme();
  const styles = createSelectCurrencyModalStyles(
    theme,
    modalHeight,
    screenWidth,
  );
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <View style={styles.header}>
                <SelectCurrencyHeader onClose={onClose} />
              </View>
              <View style={styles.listContainer}>
                <SelectCurrencyList
                  selected={selected}
                  onSelect={onSelect}
                  onClose={onClose}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
