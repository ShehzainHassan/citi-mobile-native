import { Images } from "@/assets/images";
import { HomeScreenCard, Tabs } from "@/components";
import { useStyles } from "@/hooks/useStyles";
import { Image, Text, View } from "react-native";

export const HomeScreen = () => {
  const { globalStyles, homeScreenStyles } = useStyles();

  return (
    <View style={[homeScreenStyles.mainContainer]}>
      <View style={[homeScreenStyles.headerContainer]}>
        <View style={[homeScreenStyles.profilePicContainer]}>
          <Image
            source={Images.profilePic}
            style={[homeScreenStyles.profilePic]}
          />
          <Text style={[globalStyles.body1]}>Hi, John</Text>
        </View>
        <Image
          source={Images.notification}
          style={[homeScreenStyles.notificationBell]}
        />
      </View>
      <View style={[homeScreenStyles.subContainer]}>
        <View
          style={[globalStyles.roundedContainer, homeScreenStyles.container]}>
          <Image source={Images.cards} style={[homeScreenStyles.cardsImg]} />
          <View style={homeScreenStyles.columnContainer}>
            <View style={homeScreenStyles.rowContainer}>
              <HomeScreenCard
                image={Images.accountAndCard}
                label="Account and Card"
              />
              <HomeScreenCard image={Images.transfer} label="Transfer" />
              <HomeScreenCard image={Images.withdraw} label="Withdraw" />
            </View>
            <View style={homeScreenStyles.rowContainer}>
              <HomeScreenCard image={Images.prepaid} label="Mobile prepaid" />
              <HomeScreenCard image={Images.bill} label="Pay the bill" />
              <HomeScreenCard image={Images.saveOnline} label="Save online" />
            </View>
            <View style={homeScreenStyles.rowContainer}>
              <HomeScreenCard image={Images.creditCard} label="Credit card" />
              <HomeScreenCard
                image={Images.transactionReport}
                label="Transaction report"
              />
              <HomeScreenCard image={Images.beneficiary} label="Beneficiary" />
            </View>
          </View>
        </View>
        <Tabs />
      </View>
    </View>
  );
};
