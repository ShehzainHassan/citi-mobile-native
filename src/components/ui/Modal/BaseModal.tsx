import { useGlobalStyles } from "@/hooks";
import { useTheme } from "@/theme";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  Modal,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { createBaseModalStyles } from "./BaseModal.styles";
import { BaseModalProps } from "./BaseModal.types";

const { height: screenHeight, width: screenWidth } = Dimensions.get("window");

export const BaseModal: React.FC<BaseModalProps> = ({
  visible,
  onClose,
  header,
  contents = [],
  heightRatio = 0.45,
  selectedItem,
  onSelect,
  alignCenter = false,
}) => {
  const { theme } = useTheme();
  const modalHeight = screenHeight * heightRatio;
  const globalStyles = useGlobalStyles();
  const styles = createBaseModalStyles(theme, modalHeight, screenWidth);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <View style={styles.header}>
                <Text
                  style={[
                    globalStyles.title3,
                    globalStyles.neutral1,
                    styles.headerText,
                  ]}
                >
                  {header}
                </Text>
                <TouchableOpacity onPress={onClose}>
                  <MaterialIcons name="close" size={20} />
                </TouchableOpacity>
              </View>

              <ScrollView style={styles.content}>
                {contents.map((item) => {
                  const isSelected = item === selectedItem;
                  return (
                    <TouchableOpacity
                      key={item}
                      onPress={() => onSelect?.(item)}
                      style={styles.row}
                    >
                      <Text
                        style={[
                          globalStyles.body1,
                          globalStyles.textDefault,
                          isSelected && [
                            globalStyles.title3,
                            globalStyles.primary1,
                          ],
                          alignCenter && styles.center,
                        ]}
                      >
                        {item}
                      </Text>
                      {isSelected ? (
                        <MaterialIcons
                          name="check"
                          size={18}
                          color={theme.colors.primary1}
                        />
                      ) : null}
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
