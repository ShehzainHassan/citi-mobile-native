import { Images } from "@/assets/images";
import { CreditCard, HomeScreenCard, Tabs } from "@/components";
import { useStyles } from "@/hooks/useStyles";
import { MainTabParamList } from "@/navigation/types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useTranslation } from "react-i18next";
import { Image, Text, View } from "react-native";

export const HomeScreen = () => {
  const { globalStyles, homeScreenStyles } = useStyles();
  const navigation =
    useNavigation<NativeStackNavigationProp<MainTabParamList>>();
  const { t } = useTranslation("homeScreen");

  const cardData = [
    [
      {
        image: Images.accountAndCard,
        label: t("accountAndCard"),
        route: "Accounts",
      },
      { image: Images.transfer, label: t("transfer") },
      { image: Images.withdraw, label: t("withdraw") },
    ],
    [
      { image: Images.prepaid, label: t("mobilePrepaid") },
      { image: Images.bill, label: t("payBill") },
      { image: Images.saveOnline, label: t("saveOnline") },
    ],
    [
      { image: Images.creditCard, label: t("creditCard") },
      {
        image: Images.transactionReport,
        label: t("transactionReport"),
        route: "TransactionReport",
      },
      { image: Images.beneficiary, label: t("beneficiary") },
    ],
  ];

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

      <View style={globalStyles.verticalSpread}>
        <View
          style={[globalStyles.roundedContainer, homeScreenStyles.container]}>
          <CreditCard
            name="John Smith"
            cardType="Amazon Platinium"
            cardNumber="475612349018"
            amount="$3.469.52"
            backgroundImage={Images.cards}
          />
          <View style={homeScreenStyles.columnContainer}>
            {cardData.map((row, rowIndex) => (
              <View
                key={`row-${rowIndex}`}
                style={homeScreenStyles.rowContainer}>
                {row.map(({ image, label, route }) => (
                  <HomeScreenCard
                    key={label}
                    image={image}
                    label={label}
                    onPress={
                      route
                        ? () =>
                            navigation.navigate(route as keyof MainTabParamList)
                        : () => {}
                    }
                  />
                ))}
              </View>
            ))}
          </View>
        </View>
        <Tabs />
      </View>
    </View>
  );
};
