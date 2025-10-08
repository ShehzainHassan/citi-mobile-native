import { HOME_CARD_GRID, HomeCardConfig } from "@/config/homeScreenConfig";
import { MainTabParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

export const useHomeScreen = () => {
  const { t } = useTranslation("homeScreen");
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();

  const cardGrid = useMemo(() => {
    return HOME_CARD_GRID.map((row) =>
      row
        .filter((card) => card.enabled !== false)
        .map((card) => ({
          ...card,
          label: t(card.labelKey),
        }))
    );
  }, [t]);

  const handleCardPress = useCallback(
    (card: HomeCardConfig) => {
      if (card.route) {
        navigation.navigate(card.route);
      }
    },
    [navigation]
  );

  return { cardGrid, handleCardPress };
};
