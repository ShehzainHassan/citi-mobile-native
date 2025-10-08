import { Images } from "@/assets/images";
import {
  AccountCard,
  Button,
  CardDetailRow,
  CardDetails,
  CreditCard,
  Header,
  ImageWithFallback,
} from "@/components";
import {
  useAccountScreenStyles,
  useCardDetailStyles,
  useGlobalStyles,
} from "@/hooks";
import { TranslationKeys } from "@/i18n";
import { MainTabParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Text, TouchableOpacity, View } from "react-native";

type TabType = "Account" | "Card";
type CardType = "Visa" | "MasterCard" | null;

export const Accounts = () => {
  const globalStyles = useGlobalStyles();
  const accountScreenStyles = useAccountScreenStyles();
  const cardDetailStyles = useCardDetailStyles();

  const [selectedTab, setSelectedTab] = useState<TabType>("Account");
  const [selectedCardType, setSelectedCardType] = useState<CardType>(null);
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const { t } = useTranslation();

  const title = selectedCardType
    ? t(TranslationKeys.accounts.titleCard)
    : t(TranslationKeys.accounts.titleDefault);

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
      {
        label: t(TranslationKeys.accounts.cardDetails.name),
        value: t(TranslationKeys.accounts.profileName),
      },
      {
        label: t(TranslationKeys.accounts.cardDetails.cardNumber),
        value: "**** **** 9018",
      },
      {
        label: t(TranslationKeys.accounts.cardDetails.validFrom),
        value: "10/15",
      },
      {
        label: t(TranslationKeys.accounts.cardDetails.goodThru),
        value: "10/20",
      },
      {
        label: t(TranslationKeys.accounts.cardDetails.availableBalance),
        value: "$10,000",
      },
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
              title={
                tab === "Account"
                  ? t(TranslationKeys.accounts.tabAccount)
                  : t(TranslationKeys.accounts.tabCard)
              }
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
            <ImageWithFallback
              source={Images.profilePic}
              style={accountScreenStyles.profilePic}
              accessibilityLabel={t(TranslationKeys.accounts.profilePicAlt)}
            />
            <Text style={globalStyles.title3}>
              {t(TranslationKeys.accounts.profileName)}
            </Text>
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
                accessibilityLabel={t(TranslationKeys.accounts.selectCardAlt, {
                  type,
                })}>
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
          <Button title={t(TranslationKeys.accounts.addCard)} />
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
            {t(TranslationKeys.accounts.deleteCard)}
          </Text>
        </View>
      )}
    </View>
  );
};
