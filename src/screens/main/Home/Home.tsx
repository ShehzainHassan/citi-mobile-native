import { Images } from "@/assets/images";
import { CreditCard, HomeScreenCard, Tabs } from "@/components";
import { useGlobalStyles, useHomeScreen, useHomeScreenStyles } from "@/hooks";
import { useTranslation } from "react-i18next";
import { Image, Text, View } from "react-native";

export const HomeScreen = () => {
  const globalStyles = useGlobalStyles();
  const homeScreenStyles = useHomeScreenStyles();

  const { t } = useTranslation("homeScreen");
  const { cardGrid, handleCardPress } = useHomeScreen();

  return (
    <View style={homeScreenStyles.mainContainer}>
      <View style={homeScreenStyles.headerContainer}>
        <View style={homeScreenStyles.profilePicContainer}>
          <Image
            source={Images.profilePic}
            style={homeScreenStyles.profilePic}
            accessibilityLabel={t("profilePicAlt")}
          />
          <Text style={globalStyles.body1}>
            {t("greeting", { name: "John" })}
          </Text>
        </View>
        <Image
          source={Images.notification}
          style={homeScreenStyles.notificationBell}
          accessibilityLabel={t("notificationAlt")}
        />
      </View>

      <View style={[globalStyles.roundedContainer, homeScreenStyles.container]}>
        <CreditCard
          name="John Smith"
          cardType="Amazon Platinium"
          cardNumber="475612349018"
          amount="$3.469.52"
          backgroundImage={Images.cards}
        />

        <View style={homeScreenStyles.columnContainer}>
          {cardGrid.map((row, rowIndex) => (
            <View key={`row-${rowIndex}`} style={homeScreenStyles.rowContainer}>
              {row.map((card) => (
                <HomeScreenCard
                  key={card.id}
                  image={card.image}
                  label={card.label}
                  onPress={() => handleCardPress(card)}
                />
              ))}
            </View>
          ))}
        </View>
      </View>
      <Tabs />
    </View>
  );
};

export default HomeScreen;
