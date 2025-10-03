import { Images } from "@/assets/images";
import {
  AccountCard,
  Button,
  CardDetailRow,
  CardDetails,
  CreditCard,
  Header,
} from "@/components";
import { useStyles } from "@/hooks/useStyles";
import { MainTabParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Image, Text, TouchableOpacity, View } from "react-native";

type TabType = "Account" | "Card";
type CardType = "Visa" | "MasterCard" | null;

export const Accounts = () => {
  const { globalStyles, accountScreenStyles, cardDetailStyles } = useStyles();
  const [selectedTab, setSelectedTab] = useState<TabType>("Account");
  const [selectedCardType, setSelectedCardType] = useState<CardType>(null);
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const { t } = useTranslation("accounts");

  const title = selectedCardType ? t("titleCard") : t("titleDefault");

  const handleHeaderPress = useCallback(() => {
    if (!selectedCardType) {
      navigation.navigate("Home");
    } else {
      setSelectedCardType(null);
    }
  }, [selectedCardType]);

  const handleTabPress = useCallback((tab: TabType) => {
    setSelectedTab(tab);
  }, []);

  const handleCardSelect = useCallback((type: CardType) => {
    setSelectedCardType(type);
  }, []);

  const cardOptions = useMemo(
    () => [
      { type: "Visa", image: Images.visaCard },
      { type: "MasterCard", image: Images.masterCard },
    ],
    []
  );

  const cardDetails = useMemo(
    () => [
      { label: t("cardDetails.name"), value: t("profileName") },
      { label: t("cardDetails.cardNumber"), value: "**** **** 9018" },
      { label: t("cardDetails.validFrom"), value: "10/15" },
      { label: t("cardDetails.goodThru"), value: "10/20" },
      { label: t("cardDetails.availableBalance"), value: "$10,000" },
    ],
    [t]
  );

  return (
    <View style={accountScreenStyles.container}>
      <Header
        title={title}
        onPress={handleHeaderPress}
        style={globalStyles.headerContainer}
      />

      {!selectedCardType && (
        <View style={accountScreenStyles.buttonsContainer}>
          {(["Account", "Card"] as TabType[]).map((tab) => (
            <Button
              key={tab}
              title={t(`tab${tab}`)}
              variant={selectedTab === tab ? "primary" : "secondary"}
              style={accountScreenStyles.button}
              onPress={() => handleTabPress(tab)}
            />
          ))}
        </View>
      )}

      {selectedTab === "Account" && !selectedCardType && (
        <View style={accountScreenStyles.accountSection}>
          <View style={accountScreenStyles.profilePicContainer}>
            <Image
              source={Images.profilePic}
              style={accountScreenStyles.profilePic}
              accessibilityLabel={t("profilePicAlt")}
            />
            <Text style={globalStyles.title3}>{t("profileName")}</Text>
          </View>
          <View style={globalStyles.spacedColumn}>
            {Array.from({ length: 3 }).map((_, idx) => (
              <AccountCard key={idx} />
            ))}
          </View>
        </View>
      )}

      {selectedTab === "Card" && !selectedCardType && (
        <View style={accountScreenStyles.cardSection}>
          <View style={accountScreenStyles.cardsContainer}>
            {cardOptions.map(({ type, image }) => (
              <TouchableOpacity
                key={type}
                onPress={() => handleCardSelect(type as CardType)}
                accessibilityLabel={t("selectCardAlt", { type })}>
                <CreditCard
                  name="John Smith"
                  cardType="Amazon Platinium"
                  cardNumber="475612349018"
                  amount="$3.469.52"
                  backgroundImage={image}
                />
              </TouchableOpacity>
            ))}
          </View>
          <Button title={t("addCard")} />
        </View>
      )}

      {selectedCardType && (
        <View style={cardDetailStyles.selectedCard}>
          <CardDetails>
            {cardDetails.map(({ label, value }, index) => (
              <CardDetailRow key={index} label={label} value={value} />
            ))}
          </CardDetails>
          <Text style={[globalStyles.body1, accountScreenStyles.deleteCard]}>
            {t("deleteCard")}
          </Text>
        </View>
      )}
    </View>
  );
};
